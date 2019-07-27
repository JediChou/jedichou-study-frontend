// File: List0211.ts
// Ref: Apress Pro TypeScript
// Listing 2-11. Extending the DeviceMotionEvent

interface DeviceMotionEvent {
	motionDescription: string;
}

// The existing DeviceMotionEvent has all of its
// existing properties plus our additional motionDescription
// property
function handleMotionEvent(e: DeviceMotionEvent) {
	var acceleration = e.acceleration;
	var description = e.motionDescription;
}
