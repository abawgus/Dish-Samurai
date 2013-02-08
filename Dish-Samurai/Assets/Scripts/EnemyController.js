#pragma strict

private var shootComponent : ShootComponent;
@script RequireComponent(ShootComponent)

@script RequireComponent(CharacterController)
private var controller : CharacterController;

private var direction : Vector3;
private var target : Vector3;

var movementSpeed : float;

function Damage(damage : float) {
	Destroy(gameObject);
}

function Start() {
	controller = GetComponent(CharacterController);
	shootComponent = GetComponent(ShootComponent);
	shootLoop();
	rotateLoop();
	changeDirectionLoop();
}

function Update() {
	controller.Move(direction*Time.deltaTime*movementSpeed);	
}

function changeDirectionLoop () {
	while (true) {
		yield WaitForSeconds(1);
		var h : float = Random.Range(-1.0, 1.0);
		var v : float = Random.Range(-1.0, 1.0);
		direction = Vector3(h,v,0);
	}
}

function PlayerLocation (loc : Vector3) {
	target = loc;
}

function rotateLoop () {
	while (true) {
		yield WaitForSeconds(1);

		var offset = (target - transform.position);
		var angle = Mathf.Atan2(offset.y, offset.x) * 180 / Mathf.PI;
		transform.rotation = Quaternion.Euler(0, 0, angle + 180);
	}
}

function shootLoop() {
	while (true) {
		yield WaitForSeconds(0.7);
		shootComponent.Shoot();
}}