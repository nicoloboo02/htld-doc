## Autoevaluación de la entrega del Sprint 1

Al hacerse esta autoevaluación posteriormente a la entrega del Sprint 1, se van a considerar todas las condiciones de suspenso, incluyendo aquellas que no se pueden saber hasta el día después de la entrega (Condiciones de fallo de la presentación). En posteriores sprints, se evaluarán únicamente las condiciones de suspensión que se puedan evaluar en el momento de la entrega.

> **En caso de que una condición no se cumpla, supondremos una nota máxima de 4 en ese criterio**

### Condiciones de Suspenso del Equipo:

| Criterio           | Descripción                                                                                                                                                                                                                                                     | Cumplimiento | Puntuación (1-10) | Justificación                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------|----------------------------------------------------------------------------------------------------------------------|
| T-1) Aviso de Ausencia | Notificar previamente la ausencia de un miembro al inicio de la clase de evaluación                                           | [x] Sí [ ] No |  10  |    No ha faltado ningún miembro del grupo                                               |
| T-2) Duración de la Presentación | Mantenerse dentro del tiempo estipulado para la presentación, sin excederse                                                                                         | [x] Sí [ ] No |  10  |   La presentación ha durado el tiempo exigido sin exceder el límite                                                                    |
| T-3) Finalización Anticipada | Concluir la presentación con diferencia menor a un minuto del tiempo designado                                    | [x] Sí [ ] No |  10  |  La presentación ha concluido 20 segundos antes del límite (Aproximadamente)                                                                                    |
| T-4) Divergencia en la Presentación | No presentar diferencias significativas entre la presentación realizada y la registrada en la plataforma de evaluación                                | [x] Sí [ ] No |   10   |  La presentación entregada se correspondía a la presentada                                                                                   |
| T-5) Respuesta a Retroalimentación | Responder y actuar según la retroalimentación recibida durante la presentación, a menos que se proporcione una justificación explícita durante la misma                   | [x] Sí [ ] No |  9   |  Bajo nuestro punto de vista, hemos sido uno de los grupos que más ha tenido en cuenta los aspectos de mejora mencionados por los profesores y por otros alumnos     |
| T-6) Inclusión de Aspectos Esperados | Incluir en la presentación todos los aspectos esperados según lo discutido en clases previas                                                                              | [x] Sí [ ] No | 9 | La presentación contaba con todos los apartados solicitados además de intentar utilizar alguna técnica de aprendizaje cómo es la gamificación para generar un personaje de lecciones aprendidas nombrado "AL".      |
| T-7) Portada Adecuada | Presentar un documento con una portada adecuada que incluya todos los elementos requeridos                                                                                                | [x] Sí [ ] No |  10   |    La portada cuenta con todos los elementos solicitados                 |
| T-8) Contenido del Documento de Contribuciones | Incluir todos los elementos requeridos en el documento de contribuciones a la Base de Conocimiento Compartida                                                                                 | [x] Sí [ ] No |  10  |  Se añaden los cambios realizados a la base de gestión del conocimiento común             |
| T-9) Correcta Entrega de Archivos | Realizar una entrega correcta sin errores en el formato o nombre de los archivos que conforman el entregable                                             | [x] Sí [ ] No | 10 |  De forma adicional, hemos entregado: - El enlace a nuestro docusaurus - Las demostraciones de cada prototipo - El registro de riesgos con el estado actual de cada riesgo - La replanificación de los sprints - El proceso de análisis y mejora de la calidad - El TCO detallado - La gestión de solicitudes de cambio                                                                                  |
| T-10) Cumplimiento de Instrucciones | Seguir las instrucciones establecidas en las pautas del revisor de software y evitar cualquier condición de suspensión relacionada con ellas                                                  | [x] Sí [ ] No |  4  | [Ver en detalle](#justificación-de-la-software-reviewer-guidelines)  |
| T-11) Evaluación del Rendimiento de Usuarios Piloto | Incluir la evaluación del rendimiento de los usuarios piloto en la entrega según el formato proporcionado                                                                  | [ ] Sí [x] No |   4 |  [Ver en detalle](#justificación-del-pilot-users-performance-evaluation) |



### Justificación de la _Software-Reviewer-Guidelines_

#### Guía del Revisor (RG)

| Criterio                         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Cumplimiento | Puntuación (1-10) | Justificación                                                                                                                                                                                                                                                               |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mapeo de Casos de Uso            | Incluir un mapeo explícito desde los casos de uso hasta las interacciones en el software, detallando cómo realizar los casos de uso principales.                                                                                                 | [x] Sí [ ] No | 7,5 | Se ha realizado un mapeo con cada uno de los casos de uso core definidos, además, se ha especificado que hay algunos que no actúan cómo deberían en comparación al producto final esperado. Principalmente hemos realizado todos los métodos de consulta, además de la parte visible de la interfaz de usuario. Lo que nos ha impedido realizar los métodos de creación ha sido la desconexión con el backend, aunque cómo se comentó en este sprint, se utilizó mockapi para poder continuar con el desarrollo (Siendo esto una solución temporal que nos ha permitido continuar con el desarrollo en frontend).         |
| Datos Necesarios para la Revisión | Proporcionar datos necesarios para realizar la revisión, como URL de la página de inicio, credenciales de usuarios, URL del repositorio de GitHub, URL y credenciales de la plataforma de implementación, URL y credenciales de la herramienta de seguimiento, y enlaces a demostraciones mostradas en clases de evaluación.                   | [x] Sí [ ] No |  10    |    Se añade todo lo solicitado                                                                                                                                                                                                                                                                                             |
| Requisitos Potenciales           | Indicar requisitos potenciales para utilizar el sistema, como activación de ubicación u otros.               | [x] Sí [ ] No |  10 | Además, en el docusaurus tenemos un apartado de casos de uso en los que se mencionan estos casos de uso y la ONG a la que aplica.                                                                                                                                                                                                                                                              |

#### Condiciones Suficientes para el Fracaso del Software
En este apartado, en caso de que NO se cumpla la condición de fallo se marcará la columna de Sí.

| Criterio                                    | Descripción                                                                                                                                                                                                                                                                                                                                                                                    | Cumplimiento | Puntuación (1-10) | Justificación                                                                                                                                                                                                         |
|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Error HTTP Percibido por el Usuario        | Una interacción legal con el sistema produce un error HTTP que es percibido por el usuario.                                                    | [x] Sí [ ] No |  10  | No hemos recibido ningún error de este tipo durante la revisión final del Sprint.                                                                          |
| Pánico Percibido por el Usuario            | Una interacción legal con el sistema provoca un pánico (crash, etc.) que es percibido por el usuario.                        | [x] Sí [ ] No |  10  | No se muestra ningún tipo de panic al usar la aplicación                                                                                                                                                                                                                                                              |
| Comportamiento No Esperado del Sistema     | Una interacción legal con el sistema no produce el comportamiento esperado.                                            | [x] Sí [ ] No |  4  | En este caso, nosotros al realizar la entrega nos cercioramos de que no hubiera ningún tipo de pantalla "vacía" que se producía cuando mockapi llegaba al límite de llamadas. Es posible que debido a que la revisión de este sprint ha sido posteriormente a la revisión por parte de los usuarios piloto, estos hayan llegado al límite de llamadas de mockapi y se haya visto reflejado en alguna parte del sistema. Aun así, puntuamos este criterio con 4 para penalizar por no haber notificado de la posibilidad de que esto sucediera                                                                                                                                                                                                                                                                    |
| Falta de Detección de Datos Incorrectos    | El sistema no detecta el envío de un formulario con datos incorrectos (validación de formularios).                       | [x] Sí [ ] No | 4  | No se pueden enviar formularios y, por consiguiente, no se pueden enviar datos incorrectos. Aun así, puntuamos este criterio con 4 para penalizar por la falta de la validación y envío de formularios.                                                                                                                                                                                                                                             |
| Acceso no Autorizado a Datos               | Un actor puede listar, editar o eliminar datos que pertenecen a otro actor.                                                                              | [x] Sí [ ] No | 10    |  No es posible realizar esta opción ya que todos los usuarios son administradores                                                                                                                                                                                                                                                                  |
| Disponibilidad del Sistema en la Nube      | El sistema no está desplegado en la nube o no está disponible en algún momento durante el período del proyecto (hasta julio).                         | [x] Sí [ ] No |   10 | Ambos sistemas están desplegados                                                                                                                                                                                                                                                                 |
| Modificación/Actualización Post-Entrega    | El despliegue del sistema es modificado o actualizado después de la fecha límite de entrega.                                 | [x] Sí [ ] No |  10   | No se ha modificado el sistema desde su entrega                                                                                                                                                                                                                                                                  |


### Justificación del _Pilot-Users-Performance-Evaluation_
No se ha entregado debido a que los usuarios piloto no han revisado el servicio debido a que en todo momento nosotros consideramos que esto era algo opcional ya que, el prototipo a revisar no era funcional y no se podía probar. Por lo tanto, no se ha podido realizar la evaluación del rendimiento de los usuarios piloto. El motivo de que nosotros creyeramos de esta forma fue debido al contenido de la presentación de la planificación de la asignatura, que menciona el sprint 1 cómo un sprint orientado a los casos de uso core y al diseño de un plan de gestión de usuarios piloto (Adjunto imagen).

<p align="center">
<img src="\img\autoevaluation\sprint1pilots.png" alt="Sprint 1 pilots" width="50%" height="50%"/>
Figura 1. Planificación del Sprint 1 ISPP
</p>

## Puntuación esperada del Sprint 1
### Criterio T-10
Primero, vamos a calcular la puntuación del criterio T-10 usando la siguiente fórmula:

<p align="center">
<img src="\img\autoevaluation\T10.png" alt="T10" width="90%" height="90%"/>
Figura 2. Fórmula de cálculo del criterio T-10
</p>

#### Pesos de los criterios del T-10
- **Guía del Revisor (RG):**
    - Mapeo de Casos de Uso: 30%
    - Datos Necesarios para la Revisión: 40%
    - Requisitos Potenciales: 30%
    - Resultado: 9,25

- **Condiciones Suficientes para el Fracaso del Software:**
    - Error HTTP Percibido por el Usuario: 10%
    - Pánico Percibido por el Usuario: 10%
    - Comportamiento No Esperado del Sistema: 15%
    - Falta de Detección de Datos Incorrectos: 10%
    - Acceso no Autorizado a Datos: 15%
    - Disponibilidad del Sistema en la Nube: 20%
    - Modificación/Actualización Post-Entrega: 20%
    - Resultado: 4 (Puntuación máxima debido a hay dos criterios que posiblemente no se puedan evaluar)

**Puntuación esperada del criterio T-10:** 4 (Puntuación máxima debido a que en las condiciones suficientes para el fracaso del software no se cumplen todos los criterios)

### Puntuación global del Sprint 1
Para calcular la puntuación se va a tener en cuenta la siguiente fómula:

<p align="center">
<img src="\img\autoevaluation\NF.png" alt="NF" width="90%" height="90%"/>
Figura 3. Fórmula de cálculo de la nota final
</p>

## Resultado final: 7, 82
