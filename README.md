# SmartPotClient

Smart Pot client web app.
Used to track all posted pots info thru the mqtt broker.

<br>

Angular version: **8.x.x**

TypeScript: **3.4.x**

## Dependencies 

* [SmartPotCore service][smart-pot-core-service]

## Deployment

Start server on your local machine running:
1. npm install
2. ng serve -o 

Otherwise build a docker image and run it in the container, passing required env variables

## Env variables
* CLOUD_API_URL - SmartPotCore API base url

[smart-pot-core-service]: https://github.com/borulchenko/smart-pot-core
