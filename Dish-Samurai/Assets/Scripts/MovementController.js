#pragma strict

private var controller : CharacterController;

var movementSpeed : float;

private var moveDirection : Vector3 = Vector3.zero; 

function Start () {

controller = GetComponent(CharacterController);

}

function Update () {

var h : float = Input.GetAxis("Horizontal");

var v : float = Input.GetAxis("Vertical");

controller.Move(Vector3(h,v,0)*Time.deltaTime*movementSpeed);

var playerPlane = new Plane(Vector3.up, transform.position);

var ray = Camera.main.ScreenPointToRay (Input.mousePosition);

var screenPos = Camera.main.WorldToScreenPoint(transform.position);

var offset = (Input.mousePosition - screenPos);

var angle = Mathf.Atan2(offset.y, offset.x) * 180 / Mathf.PI;

transform.rotation = Quaternion.Euler(0, 0, angle + 180);

}