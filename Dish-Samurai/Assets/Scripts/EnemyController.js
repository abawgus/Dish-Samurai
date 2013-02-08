#pragma strict

private var shootComponent : ShootComponent;
@script RequireComponent(ShootComponent)

function Damage(damage : float) {
	Destroy(gameObject);
}

function Start() {
	shootComponent = GetComponent(ShootComponent);
	shootLoop();
}

function Update() {
	
}

function shootLoop() {
	while (true) {
		yield WaitForSeconds(.3);
		shootComponent.Shoot();
}}