#Tesape

> Guaraní: **Percepción sensible de la luz**; iluminación
> Nota: En lengua charrúa no se encuentra palabra, el idioma está extinto.

###Configuración de Nodos

| Nodo Maestro  | **Hardware**  | **Software**  |
|---------------|---------------|---------------|
|               | Raspberry Pi  | Tesape :)     |
|               | Modem         |               |
|               | ???           |               |


| Nodo Esclavo  | **Hardware**  | **Software**  |
|---------------|---------------|---------------|
|               | Arduino       | ino (folder)  |
|               | Wifi          |               |
|               | RGB Led       |               |
|               | Rotor 1       |               |
|               | Rotor 2       |               |


Para compilar las cascadas de estilo:

```
sass --watch sass/tesape.scss:css/tesape.css
```


#### Dependencias de interfaz gráfica
* JQuery
* [https://github.com/andreruffert/rangeslider.js](rangeslider.js) 
* [https://github.com/aterrien/jQuery-Knob](JQuery-Knob)
