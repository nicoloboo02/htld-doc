---
id: seguimiento-de-la-calidad
title: Seguimiento de la calidad del producto
sidebar_label: Seguimiento de la calidad
---
## Introducción
Esta sección se encarga de mostrar el seguimiento de la calidad del producto. Se mostrarán las estadísticas de las distintas herramientas usadas a lo largo de las distintas fases del proyecto.

## Herramientas utilizadas
Durante esta fase del proyecto se han utilizado dos herramientas para el seguimiento de la calidad del producto. Estas herramientas varían en función del repositorio en el que se encuentre el código.

### Comunes a los dos repositorios
[Codacy](https://www.codacy.com/) se encarga de analizar el código y mostrar estadísticas sobre la calidad del mismo. Estas estadísticas se muestran en forma de gráficos y se pueden ver en la página principal de Codacy. Además, Codacy permite ver los errores y advertencias que se han producido en el código y permite ver en qué archivos se han producido estos errores y advertencias. Codacy también permite ver el histórico de errores y advertencias que se han producido en el código y permite ver cómo ha evolucionado la calidad del código a lo largo del tiempo.

### Frontend
En los repositorios de frontend ACAT y CyC se han utilizado los informes de cobertura generados por la librería jest. Estos informes muestran la cobertura de los tests realizados en el código y permiten ver en qué partes del código se han realizado tests y en qué partes no. Además, estos informes permiten ver la evolución de la cobertura de los tests a lo largo del tiempo.

### Backend
En el repositorio de backend se ha utilizado la librería coverage.py para generar informes de cobertura de los tests realizados en el código. Estos informes muestran la cobertura de los tests realizados en el código y permiten ver en qué partes del código se han realizado tests y en qué partes no. Además, estos informes permiten ver la evolución de la cobertura de los tests a lo largo del tiempo.

## Sprint 1
### Codacy
A continuación se muestran las estadísticas de calidad del código de los repositorios ACAT, CyC y Backend en Codacy.
#### Frontend ACAT
<p align="center">
<img src="\img\quality\ACATQ.png" alt="ACAT" width="35%" height="35%"/>
Figura 1. Calidad de código de ACAT
</p>

#### Frontend CyC
<p align="center">
<img src="\img\quality\CyCQ.png" alt="CyC" width="35%" height="35%"/>
Figura 2. Calidad de código de CyC
</p>

#### Backend
<p align="center">
<img src="\img\quality\backQ.png" alt="Backend" width="35%" height="35%"/>
Figura 3. Calidad de código del repositorio de Backend
</p>
La calidad del código es algo importante para nosotros y hemos intentado mantener el software con el mínimo posible de "issues". Durante el final del sprint ha aumentado un poco el número de problemas encontrados debido a que el retraso en algunas tareas ha impedido que se pudiese dedicar tiempo extra para refactorizar dichos problemas, por ello, se ha pospuesto esta tarea al inicio del sprint 2. Por otra parte, destacar que en los dos repositorios de frontend el número de problemas enconrtados es menor y además son problemas de estilo de código (No son problemas como tal sino aspectos de mejora o buenas prácticas).

### Cobertura
Debido a que no se tienen imagenes detalladas de la cobertura del código en el sprint 1, se mostrará en la siguiente tabla:

| Repositorio | Cobertura |
|-------------|-----------|
| ACAT        | 90,58%      |
| CyC         | 91,89%      |
| Backend     | 86%      |


Imágenes de la cobertura de cada repositorio:
- Frontend ACAT
<p align="center">
<img src="\img\coverage\ACATcoverage.png" alt="ACAT" width="80%" height="80%"/>
Figura 4. Cobertura de código de ACAT
</p>

- Frontend CyC
<p align="center">
<img src="\img\coverage\cycCoverage.png" alt="CyC" width="80%" height="80%"/>
Figura 5. Cobertura de código de CyC
</p>

- Backend
<p align="center">
<img src="\img\coverage\backCoverage.png" alt="Backend" width="60%" height="60%"/>
Figura 6. Cobertura de código de backend
</p>

Por último, destacar que en este primer sprint se ha alcanzado unos niveles óptimos de cobertura de código, siendo esto algo realmente complejo debido a que hay líneas de código que no se pueden probar (además de no tener sentido probar líneas de código simples). En resumen, la calidad en este primer sprint está en un buen nivel y el "core" de nuestro proyecto está probado en profundidad.

## Sprint 2
### Codacy
A continuación se muestran las estadísticas de calidad del código de los repositorios ACAT, CyC y Backend en Codacy.
#### Frontend ACAT
<p align="center">
<img src="\img\quality\ACATQ2.png" alt="ACAT2" width="80%" height="80%"/>
Figura 7. Calidad de código de ACAT
</p>

#### Frontend CyC
<p align="center">
<img src="\img\quality\CyCQ2.png" alt="CyC2" width="80%" height="80%"/>
Figura 8. Calidad de código de CyC
</p>

#### Backend
Destacar en la **_Figura 9_** la mejora de calidad de código de forma considerable, reduciendo más de un 10% el número de problemas de código. Esta subida en el número de problemas se dió en la fecha correspondiente al Sprint 1, siendo esto resuelto la semana siguiente con el objetivo de mejorar la mantenibilidad del código.
<p align="center">
<img src="\img\quality\backQ2.png" alt="Backend2" width="80%" height="80%"/>
Figura 9. Calidad de código del repositorio de backend
</p>

### Cobertura
En la siguiente tabla se muestra de forma clara la cobertura de los repositorios en este segundo sprint:

| Repositorio | Cobertura |
|-------------|-----------|
| ACAT        | 70%      |
| CyC         | 78,35%      |
| Backend     | 79%      |


A continuación se muestran imágenes en detalle de los informes de cobertura de código generados:
- Frontend ACAT
<p align="center">
<!-- <img src="\img\coverage\coverageACAT2.png" alt="ACAT" width="80%" height="80%"/> -->
Figura 10. Cobertura de código de ACAT
</p>

- Frontend CyC
<p align="center">
<img src="\img\coverage\coverageCyC2.png" alt="CyC2" width="80%" height="80%"/>
Figura 11. Cobertura de código de CyC
</p>

- Backend
<p align="center">
<img src="\img\coverage\coverageBack2.png" alt="Backend2" width="80%" height="80%"/>
Figura 12. Cobertura de código de backend
</p>

## Comparativa de los sprints
En la siguiente figura se muestra de forma clara cómo se ha mantenido la calidad del código durante este segundo sprint, incluso ha habido una pequeña mejora debido a la reducción en Backend de problemas generados en el sprint 1.
<p align="center">
<img src="\img\quality\Q.png" alt="calidad" width="40%" height="40%"/>
Figura 13. Niveles de calidad en cada sprint
</p>

Cómo podemos ver en la **_Figura 14_**, en el segundo sprint el nivel de cobertura del código ha disminuido de forma notable, los motivos de esta bajada en la cobertura son:
- Se han realizado la mayoría de módulos principales de la aplicación, ocasionando esto que al haber tantas líneas de código el número de tests equivalentes para mantener la cobertura del sprint anterior es muy alta en comparación al anterior. Por ello, hemos decidido centrarnos en probar las funcionalidades esenciales e importantes.
- Se ha replanificado aumentar la cobertura de tests para el siguiente sprint. En el tercer sprint se buscará mejorar la cobertura de tests pero evitando hacer tests triviales, de forma que si aun así la cobertura se mantiene en estos niveles, daremos por finalizada dicha tarea.

<p align="center">
<img src="\img\coverage\coverage.png" alt="Cobertura" width="40%" height="40%"/>
Figura 14. Cobertura de código en cada sprint
</p>