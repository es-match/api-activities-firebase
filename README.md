# api-activities-firebase


API Criada para uso dentro do aplicativo Easy Sport Match, desenvolvido durante especializaçao em Engenharia de Software EES UFSCAR


Requests disponíveis



# GET /activities/:id

## Request
| Parâmetros    | Tipo          | Obrigatório  |
| ------------- |---------------| -------------|
| id            | string        | sim          |


## Response
| Parâmetros    | Tipo          |
| ------------- |---------------|
| activityDescription     | string      |
| activityName     | string      |
| createDate     | string      |
| imageUrl     | string      |


---

# GET /activities

## Request
| Parâmetros    | Tipo          | Obrigatório  |
| ------------- |---------------| -------------|
|       |               |         |


## Response
| Parâmetros    | Tipo          |
| ------------- |---------------|
| listActivities     | List<Map<string,string>>        |

