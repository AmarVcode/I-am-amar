import { Component , AfterViewInit , ElementRef , Input , OnInit , ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-anime2',
  templateUrl: './anime2.component.html',
  styleUrls: ['./anime2.component.scss']
})
export class Anime2Component implements OnInit, AfterViewInit  {

  @ViewChild('canvas')
  private canvasRef: any;

  //* Cube Properties

  @Input() public rotationSpeedX: number = 0.01;

  @Input() public rotationSpeedY: number = 0.01;
  @Input() public rotationSpeedZ: number = 0.01;

  @Input() public texture: string = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAPDxIVEA8PDw8OEA8QFRIPDw8PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zRDMvNygtLisBCgoKDg0OGBAQGy0dHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMkA+wMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQYAB//EAD0QAAEDAgIHBwIEBQMFAQAAAAEAAgMEESFRBRIxQWGRoRMiUnGBsfAGwRRCYtEjMnKy4UOCkgcWU6LxFf/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EADQRAAIBAwMCAwUGBwEAAAAAAAABAgMRURIhQTFhE3GBBCJSobEjMpHB0eEUM0JicoLwQ//aAAwDAQACEQMRAD8A+I3RXUhEFrUe41gdZTc5Hkj/AHCIJ1F5BYAE5FTrHIpwRBOoPIwkOOR5KQ45HknBGEyg8nFcOOR5Ig85HkrAXo9/mU+h36hEhxyPJFrHwnkrARBMqfc6xU1je+qdgGxSHnI8lbRI+H3DYp6x8J5KC85HkroQvGLfM+xXODydYq65ydyXgXeE8lcXkfD7hsUnuJBGqeSgvOR5K8hKXw3kFinrHwnkhLjkeSuoCho7nWKeucjyXtY5HkrDNnP3Xik0PICsXHI8kBJyPJWShKVw7nFfWOR5KCTkeSsFCUmh5AVy7zUX80120eqEpNDyAUvXRleSuPcFiAUYKEMCMRhUSkEgn3CYCoEQU9k35dMoy7HEhyYCoELcvdEYGgHy4qiU7cBJDlIcobA35dMbTty6lOoyeAngQvMcMfMpgpmZdSiFMzLqVTTLt/3odYEOCMOCJtKzLqUwUbMupTqMuw9hWsEWsETaRmsRbAAZ7Tf9kwUTMupRUZB0sWHBBIR3f6vsVZ/Bsy6le/Bsy6lFxl2DYRrBe1gnfg2ZdSvCjZl1KGmXY6zEFwQlwTpqNgBsLHzK8aNmXUoaZB0sQXBQSE/8IzLqUDqVmXUpHGSwLZlVrhb1PuoLgnupmZdSgNO3L3U9MlgFhJcEJcmmnbl1KV2Lbnz+yVqXYWwBcoJRmFuXuhMTcklpdgCnHEeqElNMbcvdLMYU2pdgAEqLoywIdQJbSAGAiCAMdwUhjuHVOm8M4cAiASS13BGI3cFRSeGEcApIwPkUDYncOqIRvzHVUV7dAjWbkxoSRC/h1TGQP/T1VY3wwoc1qc1iSynf+nqnRQPO4YGy0Qi3wUjEa1iY2Nejo3/p6qy2leN7eoWuFBstGncrNj7x/pb7lN7NN/Duve7dlkYpXne30JKo/ZmuqKKiV+zUdmrDqKT9PVJfTPBA7uJtvyv9lCVNoDpsgRqeyTWUUn6eqeyif+kc1yp3KRo3KMsXdPkvOiV91M/EEt5oTRuOwtPkSi6DXBb+FZnOiSnRrQkoX/p6qtJRv4dVCcGuCM6DRTcxJc1PdA842CS+mf8Ap6rLK+DNOFgHBJtifT2TXQvG8dUp0L9txj5qUr4ZJgkJbgiMT+HVLMbuHVI28MSx4hLIUuY7ghLHcEjbwwEFRZTqHh1Q6ruCS7wKGEwJAkRiUJozjkI47vMI2quZR1BTROFRTjfqcPamNVYThMbOPl1WM45CWWhPjaqjKgfLqzFOPgK007MpEuRtVinZYG+bjf1SYJRvXb/RugmOY6uqu7TRkuY04a5G88vuvRhGMI65fu8Jd2aLqEdTE6A+k5qgdo89hBt7R+BcOAOz5gtcu0VSHVDTVSt2nB7QfM4DosH6k+rXVLixp7OmbgyNt26wzNt3BYX41owFhwsU7U3/ADG4/wBsXa3nLq3ngKpSnvN27HeD6tphg2ibbyF/7kQ0po2owmpzAT+YAADjrDZzXA/jhmOqYyvGfQqfhU/6bxeVKSf1f0KL2eHF16naV/0l3O2opBURWvqEgvA4H9+a5WWLvNuCC15BBwLTqnAhWtE6bfTPEkTrY3czHVd5jceK7n/86l0gyKtc0xBuMwI1A8WOHH5uSTm6P8z3o/Fbe+Gl8mvXtW7pfzN1nk5bQf0/NU4t7kQ2zO2W/Tn5+63HU+jaTuyE1Mo2jB4B8tg5BZv1H9Va/wDApj2dMzu93Ayeo2DiuZdWtGH2K7TUlvO8VhdfV9fRFVTnJXn7qwvzZ2//AHTTNwZRttxDR90Q01o+bCan7O/5mhptxuLrhRVX+FaWjNHTVJIibfVBJJu1o4XzU3QppX3XfU1+ZRezU0r7rvdnSVf0nFMztaGQPFr6jjc+h2+646to3McWPaQW7WnarFLpKSmluxxa5jrOAvYkbQRvXaAxaWpy4ANqox/y/cG6SUp0vvvVHPK87dUUlGVP7+8c8rzt1Xc+XOhw5+6qStWzWxGMuY8apa4gg7jdZFRKPl0lVJEPaPZ3EpyBJcmSzj5dVnzj5dZJTieXONmS4JRUOnHy6AzD5dSc45JMF+0eR+ygqHyi49UBlCnrjkQIoFBlCHtAkc45APajBSgUYKumcOaUYSWuCY1wVEwjWFMdbVOG4+yU1wThsPkVVPYZFiIDDBW4VThcLDyCuwELZR6l6aNXRtKZpI4W7ZHht8htJ6Fdb9c1gZ2VBFgyFjXSAbC7cD6g8gqH/TuEOrWnaI43v9cP8rO09Pr1U7ycTK4ejbfsVte9Vf2q/wDtJ2X4JbYKpaqtsIoFyi6AyBEwg71KT3Hk9z0TRruNvyt93fPRX4WDJVYrB5v4W+7lr6NgEssUR2SSBrv6bEketreqKt1ZenFdWan0/oPt/wCLL3KVmLicO0tuH6ffy2lp/Tnb2hhGpSswAGHaW3n9Pv5bbP1jXkSfg29yGFrbtGHaE3wPDBc62xsBiSbNaBcuO4BSppzaqS/1WL8/5PPH0elBzaqS9Fj9yA25GFyTYAC5JyACtQ6Mldg2J5/2Fv8AdZdHQUUdDH+KqrOqHD+HHt1b7ABnx+y1m6UfVQGSjeGTtHfiIG0bdihU9pa3irx6ane1/Tjv0DKtzFXje2p3tf0+vQ5+k+kXOGtVObDFtIJ75Hnu9OaZpLTsUDPw1ANUbHS7zna20rB0nWSv1u2e9zm3BY42DXZFowVCSUJvCcrOq74S6fuX8N7Oo7244/f1Blf/APd5OavaF0iYJmSNNrOGtxbv/dZD5RmmxvCd2ldManNSlvujrfruhbeOpYO5M0E5X3/fouFqW8F9Frf4uiGOOJjsL+Qt+6+fVJCzUW/D0vhtfgHR9lpf9Lcfw6fJmTMAqBGLsN49gtGayz3nF3p7KUzyK0RbktxRuISXOCk2ZWA4pTkxzglOcptk2QUKklClbACIuJTBDxKkImoxhHALAmG1sTtATW048RUO3eY905qeMY36BJbTDN3NMbSjxO5rzU5qvGMcDpBR0o8R5q7T0o8TuaRGrcBW2jZM0U+p2X/TkBlY0XJ7SJ7cc7j91k6corVM4LiCJnYeZB+6HQ9Z2MsUw/03gn+nY7ob+i6b65oQJGVbMYqlrbkbA/dzxHJapO1Vf3Rt6xd/ozRFWq/5L5nFfgR4ncwnN0aPE/n/AIVlkeKu0tG+QXjjfIPE1vd9CcD6IaeSyp8szo9HgY6zr53H7LQoozE9krHEvjcHtB2G20eouFJhIOq4Frh+VwLXeeO1S3BddotFOPXodZpDR8OkgKiKURT2DZGOwxG4j5tUUdBBo4GWWQTz7I2DGxyAXNNAJvbHMXB5hee0BzDbEusXHE21XbzisvgvTo1vTiyvbF+tvyBGlto1vTj8r4HaTlfUydpK865vqsaRZgyGfmvaMe+neJYXu1htDj3XDwn91raBjp5Q+nmaGyPcXRy7ydwB3ELP0lo99PIY5Nv5H7nj9+CKqRbdLpbjazXY0Rav4a4XS2zXbtn5m3pLR8WkYjND3KhgtJHsLrbQVxk+jhiC57SDZzTa7TkVqUNY+CQSRmzhtG548J/ddJW0cekIu3gsyoYLSR7Na224+clHW6Gz+5w/h7PsGP2S0t+5w/h7Ptfo+D5zJo8eJ3P/AAnRUdvzO5q7UREEgghwNi07QcinaNojNKyNu1zm+gzVnZbvoUp0mp26HT1Dez0O1p2vNxy2r55UUw8Tua7/AOuakNENK3/Sa29vFst8yXBVLlk9n3puT5bZ2r7LV8Tcvxe30v6mRUUg8Tuaoy0g8TuYWlMqUiWUY4PFrFJ1MPEUt1OPEVZekuUXCODJIqvhxAud6AwcSrD9o9fsluUtMcE2JMPEoOy4lNKFBxjgUAa2XVMbrZdQpBRtcjGPdgB7x/LvG8IwX+HqEYKY0qqh3YQG6/h6hNDnjHVNhxCYxyNzsD5H2VVG3I6Ijc/wnmrcPaeE/wDIIInbFaietNPYtBlqne8flv6hd39K6SZNCaCswa64heTe24NvmPtwXDwPK3dBU3bTwxHY6RpO42b3vsFrlaUGpbW3vymuTbpU4NPa298G/QfR72zPNQ4Cmi7xd/5RtAPzHyRaS+rpWO1KJjWRNwDiB37ZYjDio+s9LOMhpWEthhsHDe85HgueYThhckgNaNrjuAClCDqpTrWe2y4Xe2X8unlSlTdS0qm+Fx5+Z18Mw0lTStkYGVMA1mvbb0I+Zri9WQi4af8Aku80NTMoYHy1Z1XzgDUb/MG7mj5vKRBTUNWSyAOgnsS2/c1vQjHqo060abnpTcL7NJtLPewaU4w1WTcL9bNpZ72ucjF2oFy21tpJBtxstrS+hJI4o5439tHg5xAF2mxG7diqs8b43ujeAHMOq7I5OHAq/oTS5gJa4a1O/wDnZt1P1Dh7KtSU7KULPtlef0Nb1bOFn2yvPy6GDeXDuncQQ4YHcQV1uiq9tZEKWsGrJb+FLhiRsx3FV9N6I1B29Odenf3rDHUvlwWJr/YgjaDuIKm9PtEE16PlMb3asU1suHyn+uVyRpzR8tLIWuBI2tcMAR+6XozSM8EgkY0gi1xfBzciur0bXx1cf4Wqtr2/hS7L7ht2FZVd9PVMbywRl2Pdc0XBG4lLGsnenVsn8msorCf9E0lLnEllfmuPLpqabo2VtOKuFurKCGvYMNY23plBSs0dCZpbOqJBZjRtblZW6R7dH0lprGVztcRjGxtgPmS4jS2k3zPL5DcnYNwCyU4SqpwT+zTfqseQkFqi4/8Amm0nzJfCn8Kd7v06mdpSslle+RwJc9zt45LFqHyH8vULSnmVCV61zt0RL2mtqM6UyeE8wqTnvJI1ThtxWlK9VL4u8x7BZpR7nk1HdlN2v4TzQO18uoVt7klzlNx7szsqP1j+XZxCU4uy6q44pDipuHdkmIOtl1CHvZdQnEobpHDuxQRIEQkCgNGSNrG5BMlLKASJQjEw+FA5jcMN4TmsbkFSKnlBCbMPhTe2bY47ioYxuQ5JjY25DkrJSyh0FFOLDyGSsxVI+EJLY2eEck+NjPCOQVo3RWBcgqR8IW3onSXZSxyjbG8OtcYjYRyKxIo2eEclapNTHD8zvdbKcuGehRkujPpGk9DsryKmllYHSAa7HbL/AGKbRaJi0fG6qqXNkkHdjDcWg5Aclw1NJb+QlpO9hLfYrtNIQGroIHRd4w4SM2knEH1xPJZqsJRUYOfuN26JO3Cv8uB3BxUYuXuN272xfucxpPTTqiYvldfDuNvgwY4edrK99MxOmqYhGL6r9dzhsaMRa/G6r6P0M6Z4jZFYk2LnMLWsGeIx8l0dbVx0EX4amsZ3D+JJt1b7SfnRUq1FFeFTXvNbLhLLNU2kvDgvetsuEssu6e+nzPO+WOVjXOFtQkG9r47eK5LSEL4HmOVuo4ce64ZgoGzOvr6zg8Y69zrXzv8AbYup07SuqaOmkMZfLhdo2ltsdvn0UE5UHGMnePTpa37BpxdNxjJ3j06WadtvTz3Mb6f+oBA7s32dA/AtvfVvvHBW9PaGDB+Ip+/A/vWbiWXy4LBlpAx2q6PUd4SLH/K6P6Orz2op/wCaGQEapxAOGzhiurJwvWp+q4a/UtOOi9SK3tdr4kufNcPm1n35ymcXPa2M3cXN1QNt74FfSNI6VbSxNfI463ZNAjB/mk8RHJIrpKekaZjExspvqNABJyK4LS1e6oeXy965wb+UD5vUGv4uSdrRXz8hGo+0KLaagr9bXk3wu22787b9EaV0y6d5fI65P8ovgGrInrB8ITptTwjkFSlYzwjktbslaOyOrVl0RXlqhw5qpJVDhzTWsZqi7c9vmlOjZ4RyUG2zzqkyu6duarOmF3Y5eytyRs8I5JD42+EclKSl2Mkiu+cfCkumCe5jfCEtzG5DkptSyiMhDpQlulHwpsjG3GG4/ZLLG5BT96/VEmKMgXtcZoy0ZDkg1RkEtpdvmKSCjBVcRnNNEZz6Ipyx9ADCdnmPdNaVXER8XRGIT4uionLAS20pjHKq2E+Loj7JwBOsNl9iqpSwOXGuGacx4zVFkDvEOScynd4uiqpPBSJoxuTqeTb/AFFZzIHbn9E6Ond4+OxWjJ4LwkbdPKtvRGmZaZxdE61/5mHFrv2K5KKF3jHJXYIneMcla6krNbHo0qia0vdH1bQmmpKmCpdqtbIxjrBmF7gG97cVwbpLklx7xN3E7S7fdP8ApzSslJKXYPaWgOGzWGPXauupBo+plbZhEzzfUtYE7ydyzbezyk1H3XjjsWjCNFyai9Ls/d4st0+m3N+hmfT+g+0Hbz9ynZjjhr2+eqfpT6vka8NpbRxMOoCRiQATfdhgk/WOk3OeaWM9nFEQ2wFrm2w8Ni5dlI95aA4uubNaBiSuhT8X7Sr6LhL9S0KaqWlUV3xHqop73eW+Xx08u/pJG6SgeJAGzRkHtB/d84oo6SHRjTK5/ayuFmDePIINGxN0ZTOdKdaeWxDB0C43TFZLUSF737f5W2uAFmp03UlKMW1Tv/yXYWFPU5JO1LGcpc6b+mNw9KaTdM8ySOudwvgAsqacZqvUtcATrA23WVWSF/iHJbfuqyWx1aquHsOkl4qvI9LdA7x/+qrugd4+ik5PB585Etdh6u9ylvcgdTOH5+iS6nd4+ild4M8mG9yQ9y86B3iHJIMTrkXGHDakcpYIyJc5LJUOhd4uiW6I+Lokblj6EpESHEeqBxUOiPi6JZjOfRT97BJkkobrxjOfRD2Zz6JG5YFDajBVcScCiEhyPJcqkTrlgFG0qt2vnyRiXgeSp4sQ3LTSmOOB8iqjZTkeSMTHwnkqKaGuXGFOa5UGzEDYeSa2c5HkqRqRKJmg1ya1yzm1ByPJG2qPHkqKoikWajHKzFKsZlScnclZZVHe13IqkaiLwkbMM/ePk37ra0PXmGWOUfkdcjMb1yUdSb31XWsBsPH91ehrTkeSopxkmmenQqZPqGk9Cx1x/EU8rWF4Gu1xtY89q9T0sGjmGSRwknIswCzrL55DpFzcWlzc9W4Qy6QJxdrEnebknms3gS06HP3cGrw1p0ud44srtY1dbeiZr6W0m+d5kkNyTgNwCypZlSlrTkeSruqj4XH/AGq+tJWWyI1qvCLNTJ3SlPeqc1USCNV2ItsKU6qOR5KUqiMEpltz0tz1WNSfCeSU6pOR5JHURBssOclOKrmq8+SWZzkeSm6kSUmPc5Ivi7zHsEDpjvaeSSZTcmx5JJTWxOTGkpbilmY5HklulOR5JPEiSbGOKWUDpfPkhMnnySOoibYRKG6jXOR5IdfgUrnEAQKY1yQHJgcmUjhhOzzCYHJBd7hGHJ1Lc4e1ya16qh6MPVFPuMWmvRteqwkCISBOp9x7lxsimF+3+p3uq7XhTHKMfMp9W6HTL7ZEbZVSEoRiUJtZRM0GTp7J1lCYIxUBNr7loVLGu2pQS1GLP6j/AGlZ4qAhknHdx/N9iuc9i/jmi6dLdOqRqAhMwQ1E5VLlp0qB0qrmYIDMEuolqLBkQukVczBCZAl1Ctksfhz91DpEhsmHqfdQ6QJFLZE3IY56W56WZAgMiVzJthOcll6gvQFyTUJc844j1+yglC52I9VBck1CniUOsoLkCTUA8GhEGBCCiCCUcADEYXhGFAKIFOlHAQhE1SYm2PlmvAqScD5JrRt0CE2FvFMbC34SltKMFOoxwFDBC34SjELfhKAFSCn0xwhwxCzjzTBA3jzKWCiDk1o4GTJELdY7bADfvx/ZMFOzjzSQ7vHyH3TdZclHA2oPsWZdSvdgz4Sg1lOsjaOBtQXYM481HYM48yo1lGsutHB2oiWFoBte/mvGBnHmgldgfJSXJLRv0BqJ7FnwlA6FvwlSXIC5daOELc86FvwlKMTfhRFyElK4xwhWyDC34Uns23O34E0lKvifT2SOMdthLkGJvwqDGPhKklQSl0xwhQDGEJYERKEpHGOAA6gQ6gUkryRpYABipsV5GlSOsRivAFSfuEaooBPBp4KbO4IgpCdQWWcQA7giAdwRBeCfQssJADuHNebrHcMMNqYFMe/zR0K/VhBDXcEwB/DmUSkJlBdxheq+98MlNn8OacoKOhZf4hF2fw5qHawtgMTbanhC78v9X2K501bqwirPyHNSGv4cynoSu8NAFODyLYISH8OaehK5wWWG4nVfw5lCQ7hzTlBS+GssUrDWO4L2q7gnM2ep9yhKRU1bqwCyHcEBDuCaUJXOCyxRRDuCEgprkBSaF3ALN0JBTXbUJU3EFhdivYoioStHWP/Z";

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
  private geometry = new THREE.BoxGeometry( 5, 5, 5,100,100,100 );
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
    this.cube.rotation.z+= this.rotationSpeedZ;

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

    let component: Anime2Component = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }
}
