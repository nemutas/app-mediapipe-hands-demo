// https://google.github.io/mediapipe/solutions/hands
// https://google.github.io/mediapipe/getting_started/javascript.html
// https://github.com/google/mediapipe
// https://stackoverflow.com/questions/67674453/how-to-run-mediapipe-facemesh-on-a-es6-node-js-environment-alike-react
// https://www.npmjs.com/package/react-webcam

import React, { useCallback, useEffect, useRef, VFC } from 'react';
import Webcam from 'react-webcam';
import { css } from '@emotion/css';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { HAND_CONNECTIONS, Hands, NormalizedLandmarkListList, Results } from '@mediapipe/hands';

export const App: VFC = () => {
	const webcamRef = useRef<Webcam>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const resultsRef = useRef<any>(null)

	/**
	 *  人差し指の先端と人差し指の先端の間に円を描く
	 * @param ctx
	 * @param handLandmarks
	 */
	const drawCircle = (ctx: CanvasRenderingContext2D, handLandmarks: NormalizedLandmarkListList) => {
		if (handLandmarks.length === 2 && handLandmarks[0].length > 8 && handLandmarks[1].length > 8) {
			const width = ctx.canvas.width
			const height = ctx.canvas.height
			const [x1, y1] = [handLandmarks[0][8].x * width, handLandmarks[0][8].y * height]
			const [x2, y2] = [handLandmarks[1][8].x * width, handLandmarks[1][8].y * height]
			const x = (x1 + x2) / 2
			const y = (y1 + y2) / 2
			const r = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) / 2

			ctx.strokeStyle = '#0082cf'
			ctx.lineWidth = 3
			ctx.beginPath()
			ctx.arc(x, y, r, 0, Math.PI * 2, true)
			ctx.stroke()
		}
	}

	/**
	 * 検出結果（フレーム毎に呼び出される）
	 * @param results
	 */
	const onResults = useCallback((results: Results) => {
		resultsRef.current = results

		const canvasCtx = canvasRef.current!.getContext('2d')!
		const width = canvasCtx.canvas.width
		const height = canvasCtx.canvas.height

		canvasCtx.save()
		canvasCtx.clearRect(0, 0, width, height)
		// canvas の左右反転
		canvasCtx.scale(-1, 1)
		canvasCtx.translate(-width, 0)
		// capture image の描画
		canvasCtx.drawImage(results.image, 0, 0, width, height)
		// 手の描画
		if (results.multiHandLandmarks) {
			// 骨格の描画
			for (const landmarks of results.multiHandLandmarks) {
				drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 1 })
				drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 1, radius: 2 })
			}
			// 円の描画
			drawCircle(canvasCtx, results.multiHandLandmarks)
		}
		canvasCtx.restore()
	}, [])

	// 初期設定
	useEffect(() => {
		const hands = new Hands({
			locateFile: file => {
				return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
			}
		})

		hands.setOptions({
			maxNumHands: 2,
			modelComplexity: 1,
			minDetectionConfidence: 0.5,
			minTrackingConfidence: 0.5
		})

		hands.onResults(onResults)

		if (typeof webcamRef.current !== 'undefined' && webcamRef.current !== null) {
			const camera = new Camera(webcamRef.current.video!, {
				onFrame: async () => {
					await hands.send({ image: webcamRef.current!.video! })
				},
				width: 1280,
				height: 720
			})
			camera.start()
		}
	}, [onResults])

	/** 検出結果をconsoleに出力する */
	const OutputData = () => {
		const results = resultsRef.current as Results
		console.log(results.multiHandLandmarks)
	}

	const videoConstraints = {
		width: 1280,
		height: 720,
		facingMode: 'user'
	}

	return (
		<div className={styles.container}>
			{/* capture */}
			<Webcam
				audio={false}
				style={{ visibility: 'hidden' }}
				width={1280}
				height={720}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				videoConstraints={videoConstraints}
			/>
			{/* draw */}
			<canvas ref={canvasRef} className={styles.canvas} />
			{/* output */}
			<div className={styles.buttonContainer}>
				<button className={styles.button} onClick={OutputData}>
					Output Data
				</button>
			</div>
		</div>
	)
}

// ==============================================
// styles

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	canvas: css`
		position: absolute;
		width: 1280px;
		height: 720px;
		background-color: #fff;
	`,
	buttonContainer: css`
		position: absolute;
		top: 20px;
		left: 20px;
	`,
	button: css`
		color: #fff;
		background-color: #0082cf;
		font-size: 1rem;
		border: none;
		border-radius: 5px;
		padding: 10px 10px;
		cursor: pointer;
	`
}
