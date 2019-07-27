// File: List0210.ts
// Ref: Apress Pro TypeScript
// Listing 2-10. TypeScript DeviceMotionEvent

interface DeviceMotionEvent extends Event {
	rotationRate: DeviceRotationRate;
	acceleration: DeviceAcceleration;
	interval: number;
	accelerationIncludingGravity: DeviceAcceleration;

	initDeviceMotionEvent(
		type: string,
		bubbles: boolean,
		cancleable: boolean,
		acceleration: DeviceAccelerationDict,
		accelerationIncludingGravity: DeviceAccelerationDict,
		rotationRate: DeviceRotationRateDict,
		interval: number
	); void;
}

declare var DeveiceMotionEvent: {
	prototype: DeviceMotionEvent;
	new(): DeviceMotionEvent;
}
