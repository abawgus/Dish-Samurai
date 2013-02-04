#pragma strict

private var controller : CharacterController;

var movementSpeed : float;

function Start () {

controller = GetComponent(CharacterController);

}

function Update () {

var h : float = Input.GetAxis("Horizontal");

var v : float = Input.GetAxis("Vertical");

controller.Move(Vector3(h,v,0)*Time.deltaTime*movementSpeed);

}