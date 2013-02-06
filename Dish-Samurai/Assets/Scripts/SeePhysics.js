#pragma strict

private var boxCollider : BoxCollider;

function OnDrawGizmos () {

	boxCollider = GetComponent(BoxCollider);

	Gizmos.color = Color.cyan;

	Gizmos.DrawCube(boxCollider.center+transform.position, boxCollider.size);

}