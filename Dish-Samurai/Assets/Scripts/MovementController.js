#pragma strict

private var controller : CharacterController;

var movementSpeed : float;

var turnSpeed : float;

private var moveDirection : Vector3 = Vector3.zero; 

function Start () {

controller = GetComponent(CharacterController);

}

function Update () {

var h : float = Input.GetAxis("Horizontal");

var v : float = Input.GetAxis("Vertical");

controller.Move(Vector3(h,v,0)*Time.deltaTime*movementSpeed);

//transform.Rotate(Vector3(Input.GetAxis("Mouse Y"), Input.GetAxis("Mouse X"), 0) * Time.deltaTime * turnSpeed);
//
var playerPlane = new Plane(Vector3.up, transform.position);

var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
var screenPos = Camera.main.WorldToScreenPoint(transform.position);
var offset = (Input.mousePosition - screenPos);
var angle = Mathf.Atan2(offset.y, offset.x) * 180 / Mathf.PI;
transform.rotation = Quaternion.Euler(0, 0, angle + 180);
/*

var hitdist = 0.0;

if (playerPlane.Raycast (ray, hitdist)) {
        // Get the point along the ray that hits the calculated distance.
        var targetPoint = ray.GetPoint(hitdist);
 
 		var offset = (targetPoint - transform.position);
 		var angle = Mathf.Atan2(offset.y, offset.x) * 180 / Mathf.PI;
/*        // Determine the target rotation.  This is the rotation if the transform looks at the target point.
        var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
 
        // Smoothly rotate towards the target point.
        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, turnSpeed * Time.deltaTime);
 *
 		transform.rotation = Quaternion.Euler(0, 0, angle);
        // Move the object forward.
        transform.position += transform.forward * turnSpeed * Time.deltaTime;
}
*/
}