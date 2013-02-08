#pragma strict

@script RequireComponent(ShootComponent)
private var shootComponent : ShootComponent;

@script RequireComponent(CharacterController)
private var controller : CharacterController;

private var catchDish : boolean;

var movementSpeed : float;
var catchTimeoutSeconds : float;

function Turn () {
	var playerPlane = new Plane(Vector3.up, transform.position);

	var screenPos = Camera.main.WorldToScreenPoint(transform.position);
	var offset = (Input.mousePosition - screenPos);
	var angle = Mathf.Atan2(offset.y, offset.x) * 180 / Mathf.PI;
	transform.rotation = Quaternion.Euler(0, 0, angle + 180);
}

function Move () {
	var h : float = Input.GetAxis("Horizontal");
	var v : float = Input.GetAxis("Vertical");

	controller.Move(Vector3(h,v,0)*Time.deltaTime*movementSpeed);


        var es : GameObject[];
        es = GameObject.FindGameObjectsWithTag("Enemy"); 
 
        for(var i = 0; i<es.length; i++){
        	es[i].SendMessage("PlayerLocation", transform.position, SendMessageOptions.DontRequireReceiver);
        }
}

function Shoot () {
	if (Input.GetButtonDown("Shoot")) {
		shootComponent.Shoot();
	}
}

function Capture () {
	if (Input.GetButtonDown("Capture")) {
		catchDish = true;
		DisableCapture();
	}
}

function DisableCapture () {
	yield WaitForSeconds(catchTimeoutSeconds);
	catchDish = false;
}

function Start () {
	controller = GetComponent(CharacterController);
	shootComponent = GetComponent(ShootComponent);
	catchDish = false;
}

function Update () {
	Move();
	Turn();
	Shoot();
	Capture();

	if (catchDish) {
		renderer.material.color = Color.green;
	} else {
		renderer.material.color = Color.white;
	}
	
}

function Damage(damage : float) {
	//Destroy(gameObject);
	if (catchDish){
		Debug.Log("Button Down");
		shootComponent.TryCatch();
	} else {
		Debug.Log("Dead");
	}
}