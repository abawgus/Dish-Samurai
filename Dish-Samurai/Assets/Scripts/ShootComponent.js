#pragma strict

var projectileCount : int;
var projectileCountMax : int;
var projectile : GameObject;
var bulletSpeed : float;

function Shoot () {
	if (projectileCount > 0) {
		var angle : Vector3;
		angle = transform.rotation * Vector3.left;
		var spawnLoc = transform.position + angle * 2;
		var projectileObject : GameObject = Instantiate (projectile, spawnLoc, Quaternion.identity);
		projectileObject.rigidbody.velocity = angle * bulletSpeed;
		projectileCount--;
	}
}

function TryCatch() {
	if (projectileCount < projectileCountMax || projectileCountMax < 0) {
		projectileCount++;
	}
}