#pragma strict

var damageVal : float;

function OnCollisionEnter(collision : Collision) {
	Destroy(gameObject);
	collision.collider.SendMessage("Damage",damageVal,SendMessageOptions.DontRequireReceiver);
}