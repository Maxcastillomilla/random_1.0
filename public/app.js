import * as THREE from 'three'
import { OrbitControls } from './jsm/controls/OrbitControls.js'
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js'


let entero = 'valor'

let jsonMadera 
let typematerial = document.getElementById('qualitymaterial')

async function obtenerDatos() {
    try {
      const response = await fetch('/obtener');
      const data = await response.json();
      console.log(data);
      console.log('lista de precios');
      jsonMadera = data;
      console.log(jsonMadera);
      loadcuernos()   
    } catch (error) {
      console.error(error);
      alert('No pudimos cargar la Lista de precios, intenta mas tarde')
    }
  }
  
  obtenerDatos();






// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
/* scene.background = new THREE.Color( 0xffffff ); */
/* scene.background = new THREE.Color( 0x21232a ); */



function cambiocolor(){
    
    scene.background = new THREE.Color( backgroundcolor.value )

}





/**
 * Models
 */

const gltfLoader = new GLTFLoader()



let metroscuadrados = 0
let mixer = null

let precioTotal 

let preciotapa
let areatapauno


//changes

const profundidad = document.getElementById('myRange7');
profundidad.addEventListener("change", () =>{
    loadcuernos() 

    document.getElementById('myrangevalue7').innerHTML = parseFloat(profundidad.value * 0.25).toFixed(2);

    

    document.getElementById('myrangevalue7').innerHTML += " M"
    
    
});



const backgroundcolor = document.getElementById('color');
backgroundcolor.addEventListener("change", () =>{
    cambiocolor() 
    focus()

    /* console.log(backgroundcolor.value) */
    
    
});






/* const tapa1 = document.getElementById('myRange5');
tapa1.addEventListener("change", () =>{
    loadcuernos() 
    focus()
    
    
});

const tapa2 = document.getElementById('myRange6');
tapa2.addEventListener("change", () =>{
    loadcuernos() 
    focus()
    
    
});
 */

const AlturaSlider = document.getElementById('myRange');
AlturaSlider.addEventListener("change", () =>{
    loadcuernos() 
    focus()
     
    
});

const HorizontalSlider = document.getElementById('myRange2');
HorizontalSlider.addEventListener("change", () =>{
    loadcuernos() 
    focus()

     
    
 
});

const Horizontaloffset = document.getElementById('myRange3');
Horizontaloffset.addEventListener("change", () =>{


    
    
    console.log(offsetH)
    loadcuernos() 
    focus()
    
 
});


const Verticaloffset = document.getElementById('myRange4');
Verticaloffset.addEventListener("change", () =>{

    
    console.log(offsetV)
    loadcuernos() 
    focus()
    
 
});


let size = document.getElementById('size')
size.addEventListener("change", () =>{
    loadcuernos() 
    focus()
 
});

let objetos = document.getElementById('objetos')
objetos.addEventListener("change", () =>{
    loadcuernos() 
    focus()
 
});





const Mvertical = [null,'p1.gltf', 'p2.gltf', 'p3.gltf', 'p4.gltf', 'p5.gltf', 'p6.gltf']
const Mhorizontal = [null,'t1.gltf', 't2.gltf', 't3.gltf', 't4.gltf', 't5.gltf', 't6.gltf']
const cables = ['inicio.gltf', 'final.gltf','inicio2.gltf', 'final2.gltf']


let palovertical = null
let palohorizontal = null
let thecable = null
let elementos

let typecable1 = []
let typecable2 = []

let distanciavertical = 5.138
let offsetH = Number(Horizontaloffset.value) 

let offsetV = Number(Verticaloffset.value)

function esPar(numero) 
{ 
  return (numero % 2) == 0; 
} 



let factorhorizontal = Number(HorizontalSlider.value)
let factorvertical = Number(AlturaSlider.value)

// const AlturaSlider = document.getElementById('myRange');
// const Verticaloffset = document.getElementById('myRange4');
function revalue(){
    factorhorizontal = Number(HorizontalSlider.value)

    factorvertical = Number(AlturaSlider.value)
   
    console.log(factorhorizontal)

    
        
        
        
        if (3.41 > factorhorizontal && 3.14 < factorhorizontal){Horizontaloffset.min = 4;Horizontaloffset.max=7;console.log("cond 1")}
        if (3.14 > factorhorizontal && 2.78 < factorhorizontal){Horizontaloffset.min=3;Horizontaloffset.max=6;console.log("cond 2")}
        if (2.78 > factorhorizontal && 2.35 < factorhorizontal){Horizontaloffset.min=2;Horizontaloffset.max=5;console.log("cond 3")}
        if (2.35 > factorhorizontal && 1.92 < factorhorizontal){Horizontaloffset.min=2;Horizontaloffset.max=4;console.log("cond 4")}
        if (1.92 > factorhorizontal && 1.48 < factorhorizontal){Horizontaloffset.min=1;Horizontaloffset.max=3;console.log("cond 5")}
        if (1.48 > factorhorizontal && 1.1 < factorhorizontal){Horizontaloffset.min=1;Horizontaloffset.max=2;console.log("cond 6")}
        if (1.1 > factorhorizontal){Horizontaloffset.min=1;Horizontaloffset.max=1;console.log("cond 7")}










        if (3.41 > factorvertical && 3.14 < factorvertical){Verticaloffset.min = 4;;Verticaloffset.max=7;console.log("cond 1")}
        if (3.14 > factorvertical && 2.78 < factorvertical){Verticaloffset.min=3;Verticaloffset.max=6;console.log("cond 2")}
        if (2.78 > factorvertical && 2.35 < factorvertical){Verticaloffset.min=2;Verticaloffset.max=5;console.log("cond 3")}
        if (2.35 > factorvertical && 1.92 < factorvertical){Verticaloffset.min=2;Verticaloffset.max=4;console.log("cond 4")}
        if (1.92 > factorvertical && 1.48 < factorvertical){Verticaloffset.min=1;Verticaloffset.max=3;console.log("cond 5")}
        if (1.48 > factorvertical && 1.1 < factorvertical){Verticaloffset.min=1;Verticaloffset.max=2;console.log("cond 6")}
        if (1.1 > factorvertical){Verticaloffset.min=1;Verticaloffset.max=1;console.log("cond 7")}




        document.getElementById('myrangevalue2').innerHTML = parseFloat(HorizontalSlider.value * 0.7).toFixed(2);
    
         document.getElementById('myrangevalue2').innerHTML += " M"

         document.getElementById('myrangevalue').innerHTML = parseFloat(AlturaSlider.value * 0.7).toFixed(2);

    document.getElementById('myrangevalue').innerHTML += " M"

    document.getElementById('myrangevalue3').innerHTML = Number(Horizontaloffset.value) + 1

    document.getElementById('myrangevalue4').innerHTML = Number(Verticaloffset.value) + 1




        

    
   
}







//sprite


function makeTextSprite( message, parameters )
    {
        if ( parameters === undefined ) parameters = {};
        var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Courier New";
        var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
        var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
        var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
        var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:0, g:0, b:255, a:1.0 };
        var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:0, a:1.0 };

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;
        var metrics = context.measureText( message );
        var textWidth = metrics.width;

        context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
        context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
        context.fillText( message, borderThickness, fontsize + borderThickness);

        var texture = new THREE.Texture(canvas) 
        texture.needsUpdate = true;
        var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } );
        var sprite = new THREE.Sprite( spriteMaterial );
        sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
        return sprite;  
    }













 //botones tapa

 let botonestapa = []
 let tapacheck=[false,false,false,false,false,false,false,false]


 // hace return de precio de las tapas para obtenerlo en el input event
 function getareatapa(){
    return areatapauno
 }



 let preprecio = null
function loadcuernos(){

    


    let precio = document.getElementById('precio')

   
    

    

    revalue()
    setTimeout(() => {  console.log("World!"); }, 500);
    

    offsetH = Number(Horizontaloffset.value) 

    offsetV = Number(Verticaloffset.value) 

    


    
    
    while(scene.getObjectByName('Scene')){
        scene.remove(scene.getObjectByName('Scene'))
    }
    while(scene.getObjectByName('Scene')){
        scene.remove(scene.getObjectByName('Scene'))
    }


        //lineas 

        if (document.getElementById('size').checked) {



            let from = new THREE.Vector3(0, 0, 0);
    let to = new THREE.Vector3(0, 1, 0);
    
    let largoline = (Number(AlturaSlider.value)/2)*6.8
    
    let arrowHelper11 = new THREE.ArrowHelper(to.normalize(), from, largoline, 0xFFFFFF, 0.3, 0.3);
    let arrowHelper22 = new THREE.ArrowHelper(to.negate(), from, largoline, 0xFFFFFF, 0.3, 0.3);
    arrowHelper11.name = 'Scene'
    arrowHelper22.name = 'Scene'
                
    scene.add( arrowHelper11, arrowHelper22 );  
    
    
    let positiony = 6.6*(Number(AlturaSlider.value)/2)
    
    arrowHelper11.position.set(-3,positiony,0)
    arrowHelper22.position.set(-3,positiony,0)
    
    
    
    
    
    let from2 = new THREE.Vector3(0, 0, 0);
    let to2 = new THREE.Vector3(1, 0, 0);
    
    let largoline2 = (Number(HorizontalSlider.value)/2)*6.45
    
    let arrowHelper33 = new THREE.ArrowHelper(to2.normalize(), from2, largoline2, 0xFFFFFF, 0.3, 0.3);
    let arrowHelper44 = new THREE.ArrowHelper(to2.negate(), from2, largoline2, 0xFFFFFF, 0.3, 0.3);
    arrowHelper33.name = 'Scene'
    arrowHelper44.name = 'Scene'
                
    scene.add( arrowHelper33, arrowHelper44 );  
    
    let positionx = 7*(Number(HorizontalSlider.value)/2)
    
    arrowHelper33.position.set(positionx,0,3)
    arrowHelper44.position.set(positionx,0,3)
        
    
    let altomm = parseFloat(AlturaSlider.value * 0.7).toFixed(2);
    let spritey = makeTextSprite( altomm + " mm ", 
            { fontsize: 18, textColor: {r:255, g:255, b:255, a:1.0}} );
        spritey.position.set(-3,positiony/2,0);
        spritey.name = 'Scene'
        scene.add( spritey );
    
    
    
        let anchomm = parseFloat(HorizontalSlider.value * 0.7).toFixed(2);
        let spritey2 = makeTextSprite( anchomm + " mm ", 
            { fontsize: 18, textColor: {r:255, g:255, b:255, a:1.0}} );
        spritey2.position.set(positionx+2,-0.01,9);
        spritey2.name = 'Scene'
        scene.add( spritey2 );
    
    
    
    
    
    
    
    } 
    









    
    //vertical
    gltfLoader.load(
        'https://raw.githubusercontent.com/Maxcastillomilla/Mueblesasset/main/mueble03/models/vertical02.gltf',
        (gltf) =>
        {
            gltf.scene.traverse( function ( node ) {

                if ( node.isMesh || node.isLight ) node.castShadow = true;
            } )
            gltf.scene.scale.set(1, 1 * (Number(AlturaSlider.value) +0.0005 ), 1 * (Number(profundidad.value) ))
            gltf.scene.position.z += 0.01
            palovertical = gltf.scene
            
            scene.add(palovertical)


            for (let i = 1; i < offsetH + 2; i++) {
                let clone = palovertical.clone()
                let horizontalvalue = Number(HorizontalSlider)
                
                let distance = 0

                

                 
                 if (1.6 >= Number(HorizontalSlider.value) && 2.2 <= Number(HorizontalSlider.value)) {
                    distance =  (6.72 * Number(HorizontalSlider.value) ) * i / (offsetH+1) 
                 } 
                
                 if (Number(HorizontalSlider.value) <= 1.5) {
                    distance =  (6.671 * Number(HorizontalSlider.value) ) * i / (offsetH+1) 
                 }

                 else{
                    distance =  (6.761 * Number(HorizontalSlider.value) ) * i / (offsetH+1)
                 }

                 


                
               


                clone.position.x += distance
                
                scene.add(clone)
                    



             }
        }
    )


    












    //horizontal

    gltfLoader.load(
        'https://raw.githubusercontent.com/Maxcastillomilla/Mueblesasset/main/mueble03/models/horizontal02.gltf',
        (gltf) =>
        {
            
            gltf.scene.traverse( function ( node ) {

                if ( node.isMesh || node.isLight ) node.castShadow = true;
            } )
            let minscale = 1
            if(Number(HorizontalSlider)<1.5){
                minscale = 1.0 * Number(HorizontalSlider) 
            }
            else{
                minscale = Number(HorizontalSlider.value) * 0.985
            }
            gltf.scene.scale.set(  minscale, 1, 1 * (Number(profundidad.value) ))
            palohorizontal = gltf.scene
            gltf.scene.position.z += 0.01
            /* gltf.scene.position.x += 2.45 * HorizontalSlider.value */
            
            scene.add(palohorizontal)


            for (let i = 1; i < offsetV + 2; i++) {
                let clone = palohorizontal.clone()
                
                let distance2 =  (6.71 * Number(AlturaSlider.value) ) * i / (offsetV+1) 
                
                
                
                clone.position.y = distance2
                /* clone.position.x += 2.45 * HorizontalSlider.value */
                scene.add(clone)

             }
        }
    )






    if (document.getElementById('objetos').checked) {

        //figura
        
        let figura = null
        
        
        gltfLoader.load(
            'https://raw.githubusercontent.com/Maxcastillomilla/Mueblesasset/main/mueble03/models/figura/scene.gltf',
            (gltf) =>
            {
                
                gltf.scene.traverse( function ( node ) {
        
                    if ( node.isMesh || node.isLight ){
                        node.castShadow = true;
                        /* node.material.displacementMap = doorHeightTexture */
                    }             
                } )
        
        
                gltf.scene.scale.set(0.18, 0.18, 0.18)
                gltf.scene.rotation.set( 0, 2 * Math.PI * (90 / 360), 0 )
                
        
                
                
                figura = gltf.scene
                figura.position.y = (6.775 * Number(AlturaSlider.value) ) * (1) / (offsetV+1) 
                figura.position.x += (6.76/2 * Number(HorizontalSlider.value) ) * (3) / (offsetH+1) 
                figura.position.z += -1.9
                figura.name = 'Scene'
        
                
                
                /* gltf.scene.position.x += 2.45 * HorizontalSlider.value */
                
                scene.add(figura)
            }
        )
        
        
        //planta
        
        let planta = null
        
        //bueno
        gltfLoader.load(
            'https://raw.githubusercontent.com/Maxcastillomilla/Mueblesasset/main/mueble03/models/plant/scene.gltf',
            (gltf) =>
            {
                
                gltf.scene.traverse( function ( node ) {
        
                    if ( node.isMesh || node.isLight ){
                        node.castShadow = true;
                        /* node.material.displacementMap = doorHeightTexture */
                    }             
                } )
        
        
                gltf.scene.scale.set(12, 12, 12)
                gltf.scene.rotation.set( 0, 2 * Math.PI * (90 / 360), 0 )
                
        
                
                
                planta = gltf.scene
                planta.position.y = 1.7
                planta.position.x += (6.76/2 * Number(HorizontalSlider.value) ) * (1) / (offsetH+1) 
                planta.position.z += -1.7
                planta.name = 'Scene'
        
                
                
                /* gltf.scene.position.x += 2.45 * HorizontalSlider.value */
                
                scene.add(planta)
            }
        )
        }















    //tapa 1


    gltfLoader.load(
        'https://raw.githubusercontent.com/Maxcastillomilla/Mueblesasset/main/mueble03/models/tapa02.gltf',
        (gltf) =>
        {

            gltf.scene.traverse( function ( node ) {

                if ( node.isMesh || node.isLight ) node.castShadow = true;
            } )



            let minscale = 1

            if(Number(HorizontalSlider)<1.5){
                minscale = 1.0 * Number(HorizontalSlider) 
            }
            else{
                minscale = Number(HorizontalSlider.value)
            }
            gltf.scene.scale.set(  minscale*0.99,  Number(AlturaSlider.value)/(offsetV+1), 1)

            



            thecable = gltf.scene
            thecable.name = 'Scene'

            
           /*  if(Number(tapa1.value)!=0){
                let distance4 =  (6.775 * Number(AlturaSlider.value) ) * (Number(tapa1.value) - 1) / (offsetV+1) 
                thecable.position.set(0,distance4,0)

                if(Number(tapa1.value)<offsetV + 2 ){
                    scene.add(thecable)
                }
                
            }

            if(Number(tapa2.value)>0){
                let clone = thecable.clone()

                let distance5 =  (6.775 * Number(AlturaSlider.value) ) * (Number(tapa2.value) - 1) / (offsetV+1) 
                clone.position.set(0,distance5,0)
                if(Number(tapa2.value)<offsetV + 2 ){
                    scene.add(clone)
                }
                

                console.log('funciona')
                
            }
            else{
                console.log('xd2')
            } */

            for (let i = 1; i < offsetH + 2; i++) {
                let clone = palovertical.clone()
                let horizontalvalue = Number(HorizontalSlider)
                let distance =  (6.76 * Number(HorizontalSlider.value) ) * i / (offsetH+1) 
                clone.position.set (distance,0,0)
                /* scene.add(clone) */



             }

             for (let i = 0; i < elementos.length; i++) {

                if(tapacheck[i]){
                    elementos[i].checked = tapacheck[i]
                    tapacheck[i] = true
                        console.log(tapacheck)
        
                    let clone = thecable.clone()
        
                    let distance4 =  (6.775 * Number(AlturaSlider.value) ) * (i) / (offsetV+1) 
        
                    console.log(distance4)
        
                    clone.position.set(0,distance4,0)
        
                    tablas[i] = clone
                        
                    scene.add(tablas[i])
                    
                    
        
                }
                
             }

             



            

        })



    









   









// series de cable
    
    setTimeout(function(){
       
        

        for (let i = 1; i < Number(AlturaSlider.value); i++) {
            

            if(esPar(i)){
                typecable1.forEach(e =>{
                    console.log(e)
                    let clonefinal = e.clone()
                    clonefinal.position.y += 4.78 * i
                    scene.add(clonefinal)
            
                   }) 

            }
            else{
                typecable2.forEach(e =>{
                    console.log(e)
                    let clonefinal = e.clone()
                    clonefinal.position.y += 4.78 * i
                    scene.add(clonefinal)
            
                   }) 
            }

            
        
               
    
        }
           
        


    }, 400);
    
       

    typecable1 = []
    typecable2 = []


    

    

    const todolist = document.getElementById('todo-list')

    todolist.innerHTML = ''

    for (let i = 0; i < Number(Verticaloffset.value) + 1; i++) {
        botonestapa[i] = 'Tapa ' + (i + 1)
      }
      console.log(botonestapa)

      const todosTemplate = botonestapa.map(t =>'<ul>' + t + 
      
      `<label class="switch" style="margin-left:20px";>
      <input  type="checkbox" >
      <span class="sliderb round"></span>
    </label>` +
      
      '</ul>')
      todolist.innerHTML = todosTemplate.join('')

      elementos = document.querySelectorAll('#todo-list ul label input')
      
      console.log(elementos)


      const tablas= []

      /* elementos[0].checked = true; */

      for (let i = 0; i < elementos.length; i++) {

      
        
        
        elementos[i].addEventListener("change", () =>{

            
           

            if (elementos[i].checked) {

                tapacheck[i] = true
                console.log(tapacheck)

                let clone = thecable.clone()

                let distance4 =  (6.775 * Number(AlturaSlider.value) ) * (i) / (offsetV+1) 

                console.log(distance4)

                clone.position.set(0,distance4,0)

                tablas[i] = clone
                
                scene.add(tablas[i])

                //preprecio += 100

                //precio.innerHTML = '$ ' + preprecio

                precioTotal+=  getareatapa()



                let preciomaderas = jsonMadera[0].precio || 'ERROR';
                metroscuadrados = precioTotal
                entero = Math.trunc(precioTotal * preciomaderas)
                precio.innerHTML = '$ ' + entero.toLocaleString('es-MX')

                console.log('precio total = ' + precioTotal)
                console.log('precio total = ' + precioTotal + ' se sumo ' +  getareatapa())

                
            }


            else{

                tapacheck[i] = false

                scene.remove( tablas[i] );
                //preprecio -= 100
                //precio.innerHTML = '$ ' + preprecio
                precioTotal-= getareatapa() 
                console.log('precio total = ' + precioTotal + ' se resto ' + getareatapa())


                //ppp
                let preciomaderas = jsonMadera[0].precio || 'ERROR';
                metroscuadrados = precioTotal
                entero = Math.trunc(precioTotal * preciomaderas)
                precio.innerHTML = '$ ' + entero.toLocaleString('es-MX')

            }
            

            
            
            /* elementos[i].checked = tapacheck[i]; */
            
        }) 

        
        

        /* elementos[0].checked = true; */

    }
    
      botonestapa = []
     
    //ancho

    let anchorapido = Number(HorizontalSlider.value)* 0.7 
    let restaancha = (Number(Horizontaloffset.value) + 2)*0.016

    let valoranchocajon = (anchorapido - restaancha)/((Number(Horizontaloffset.value)+1))

    document.getElementById('alturabox').innerHTML = valoranchocajon.toFixed(3)+" M" 


    
      
//aca
    /* let sumauno = (parseFloat(Verticaloffset.value) + 2) * 0.016
    let sumados = parseFloat(valoranchocajon).toFixed(2)
    let sumatres = sumados - sumauno
     */


    //alto



    let sumacuatro = ((parseFloat(Verticaloffset.value)) + 2) * 0.016
    console.log("tablas verticales =" + ((parseFloat(Verticaloffset.value)) + 2)+"suma total =" + sumacuatro)
    let sumacinco =(parseFloat(AlturaSlider.value) * 0.7).toFixed(2)
    console.log("altura total " + sumacinco)
    let sumaseis = (sumacinco - sumacuatro)/(+Verticaloffset.value+ 1 )

    console.log('altura sin tablas= '+(sumacinco - sumacuatro)+' .dividido en ' + (+Verticaloffset.value+ 1)   )

    let valorcajonalto = sumaseis
    
    document.getElementById('anchobox').innerHTML = valorcajonalto.toFixed(3)+" M"


    /* localStorage.setItem("paypal",preprecio) */


    let areaVertical = (sumacinco * parseFloat(+profundidad.value * 0.25))*((parseFloat(Verticaloffset.value)) + 2)
    console.log(areaVertical + ' es area vertical')

    let areaHorizontal = (+anchorapido * parseFloat(+profundidad.value * 0.25))*((Number(Horizontaloffset.value)+1))
    console.log(areaHorizontal + 'area horizontal de todas')

//PRECIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

areatapauno = (HorizontalSlider.value * 0.7) * +valorcajonalto
console.log('area tapa uno es ' + areatapauno)
preciotapa = 0

console.log(' elementos vivos ' + elementos)
console.log(elementos)

for (let i = 0; i < elementos.length; i++) {
    console.log('elemntos funcionando?')

    if(tapacheck[i]){
        console.log('está cheked')
        preciotapa += areatapauno   
        console.log(preciotapa + 'precio tapa')
        console.log('precio tapa uno ' + areatapauno)
    }
    
 }

 precioTotal = preciotapa + areaVertical + areaHorizontal
 console.log('precio tapa = ' + preciotapa + ', areavertical= '+areaVertical +', areahorizontal= '+ areaHorizontal)


 let preciomaderas = jsonMadera[0].precio || 'ERROR';
 metroscuadrados = precioTotal
 entero = Math.trunc(precioTotal * preciomaderas)
 precio.innerHTML = '$ ' + entero.toLocaleString('es-MX')

}












/* const light = new THREE.AmbientLight( 0xffffff ); // soft white light
light.intensity = 10
scene.add( light ); */

let geometry = new THREE.BoxGeometry( 0.5, 3, 0.16 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
let cube = new THREE.Mesh( geometry, material );
/* scene.add( cube ); */










/**
 * Floor
 */
 const smaterial = new THREE.ShadowMaterial();
 smaterial.opacity = 0.5;
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(300, 300),
    smaterial
)
/* scene.fog = new THREE.Fog(0x21232a , 150, 200); */
floor.receiveShadow = true

floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 70
directionalLight.shadow.camera.left = - 70
directionalLight.shadow.camera.top = 70
directionalLight.shadow.camera.right = 70
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(- 10, 14, 15)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: document.getElementById('conter').offsetWidth,
    height: document.getElementById('conter').offsetHeight
}

window.addEventListener('resize', () =>
{
    setTimeout(()=>{
        // Update sizes
    sizes.width = document.getElementById('conter').offsetWidth 
    sizes.height = document.getElementById('conter').offsetHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer

    renderer.setSize(sizes.width, sizes.height)
    /* renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) */
    renderer.antialias= true 
    }, 100)
    
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 200)
camera.position.set(-8, 20, 25)

scene.add(camera)



// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(2.5 * Number(HorizontalSlider.value), 2.6 * Number(AlturaSlider.value) , 0)
controls.enableDamping = true


//angulo
controls.maxPolarAngle = 2 * Math.PI * (90 / 360)
controls.maxDistance = 60
controls.minDistance = 14
controls.panSpeed = 0.5

controls.minAzimuthAngle = -2 * Math.PI * (115 / 360)
controls.maxAzimuthAngle = 2 * Math.PI * (115 / 360)



function focus(){
    controls.target.set( 2.5 * Number(HorizontalSlider.value), 2.6 * Number(AlturaSlider.value) , 0)
    let gradedistance = 0.5 + (Number(HorizontalSlider.value)*0.22) + (Number(AlturaSlider.value)*0.1)
    camera.position.set(-10*gradedistance, 30*gradedistance, 30*gradedistance)
    controls.update();
}

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    preserveDrawingBuffer: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
/* renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) */
renderer.setPixelRatio(2)
renderer.alpha = true
renderer.setClearColor( 0xffffff, 0);




renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.3






/* gui
    .add(renderer, 'toneMapping', {
        No: THREE.NoToneMapping,
        Linear: THREE.LinearToneMapping,
        Reinhard: THREE.ReinhardToneMapping,
        Cineon: THREE.CineonToneMapping,
        ACESFilmic: THREE.ACESFilmicToneMapping
    })
    .onFinishChange(() =>
    {
        renderer.toneMapping = Number(renderer.toneMapping)
        updateAllMaterials()
    })



gui.add(renderer, 'toneMappingExposure').min(0).max(10).step(0.001) */


scene.background = new THREE.Color( backgroundcolor.value )





//captura

/* const captura = ()=>{
    tecla = window.onkeydown
    html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    });
} */

/* addEventListener("keydown", (e) => {
    console.log(e)
    if(e.code === 'KeyP'){
        html2canvas(document.body).then(function(canvas) {
            document.body.appendChild(canvas);
            
        });
    }
    else return

}); */


//pay


let elementosdos = document.querySelectorAll('input')
      
     


     

      for (let i = 0; i < elementosdos.length; i++) {

         elementosdos[i].addEventListener("input", () =>{
            document.getElementById('myrangevalue7').innerHTML = parseFloat(profundidad.value * 0.25).toFixed(2);

    

             document.getElementById('myrangevalue7').innerHTML += " M"
             

             document.getElementById('myrangevalue2').innerHTML = parseFloat(HorizontalSlider.value * 0.7).toFixed(2);
    
         document.getElementById('myrangevalue2').innerHTML += " M"

         document.getElementById('myrangevalue').innerHTML = parseFloat(AlturaSlider.value * 0.7).toFixed(2);

            document.getElementById('myrangevalue').innerHTML += " M"

            document.getElementById('myrangevalue3').innerHTML = Number(Horizontaloffset.value) + 1

            document.getElementById('myrangevalue4').innerHTML = Number(Verticaloffset.value) + 1

         })
    }









    const carrocompra = document.getElementById("carrocompra")

carrocompra.addEventListener("click", () =>{
  loadcuernos() 
  document.getElementById("preciomercado").value = +metroscuadrados;
  document.getElementById("materialmercado").value = 0;
  console.log(document.getElementById("preciomercado").value )
   console.log('click carro')
   submitmercado()
   
    
})

const submitmercado = () =>{
  setTimeout(function(){
  let formulario = document.getElementById('formpago');
   formulario.submit();
   console.log('listo')
}, 300);
  
} 



/**
 * Animate
 */

let stop = false



const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    if(!stop){
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime

        // Model animation
        if(mixer)
        {
            mixer.update(deltaTime)
        }

        // Update controls
        controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)

    }
    
}

tick()