#pragma strict

private var controller : CharacterController;

var movementSpeed : float;
var projectileCount : int;
var projectileCountMax : int;
var projectile : GameObject;
var bulletSpeed : float;

private var moveDirection : Vector3 = Vector3.zero; 

function Turn () {
	var playerPlane = new Plane(Vector3.up, transform.position);

	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var screenPos = Camera.main.WorldToScreenPoint(transform.position);
	var offset = (Input.mousePosition - screenPos);
	var angle = Mathf.Atan2(offset.y, offset.x) * 180 / Mathf.PI;
	transform.rotation = Quaternion.Euler(0, 0, angle + 180);
}

function Move () {
	var h : float = Input.GetAxis("Horizontal");
	var v : float = Input.GetAxis("Vertical");

	controller.Move(Vector3(h,v,0)*Time.deltaTime*movementSpeed);
}

function Shoot () {
	if (Input.GetButtonDown("Shoot")) {
		var angle : Vector3;
		
		angle = transform.rotation * Vector3.left;
	
		var spawnLoc = transform.position + angle * 1.1;
		
		var dish : GameObject = Instantiate (projectile, spawnLoc, Quaternion.identity);
		
		Debug.Log(transform.rotation);
		
		dish.rigidbody.velocity = angle * bulletSpeed;
		
	}
}

function Start () {
	controller = GetComponent(CharacterController);
}

function Update () {
	Move();
	Turn();
	Shoot();

}