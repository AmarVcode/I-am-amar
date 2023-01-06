import { Component , AfterViewInit , ElementRef , Input , OnInit , ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-anime1',
  templateUrl: './anime1.component.html',
  styleUrls: ['./anime1.component.scss']
})
export class Anime1Component implements OnInit, AfterViewInit  {

  @ViewChild('canvas')
  private canvasRef: any;

  //* Cube Properties

  @Input() public rotationSpeedX: number = 0;

  @Input() public rotationSpeedY: number = 0.01;
  @Input() public rotationSpeedZ: number = 0.5;

  @Input() public texture: string = "data:image/jpeg;base64,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"
  @Input() public size: number = 100;


  //* Stage Properties

  @Input() public cameraZ: number = 500;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 1000;

  //? Helper Properties (Private Properties);

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private loader = new THREE.TextureLoader();
  private geometry = new THREE.SphereGeometry( 4, 32, 200 );
  private material = new THREE.MeshBasicMaterial({map: this.loader.load(this.texture) , wireframe:true});

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  /**
   *Animate the cube
   *
   * @private
   * @memberof CubeComponent
   */
  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
    this.cube.rotation.z= this.rotationSpeedZ;

  }

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000)
    this.scene.add(this.cube);
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
 * Start the rendering loop
 *
 * @private
 * @memberof CubeComponent
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: Anime1Component = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }


  move(){
    let obj:any=document.getElementById("canvas")
    obj.style.transform='translate(300px)'
    }

    remove(){
      let obj:any=document.getElementById("canvas")
      obj.style.transform='translate(-200px)'

    }
  constructor() { 

   

  }




  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }
}
