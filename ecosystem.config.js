module.exports = {
  apps : [{
    name: "app",
    script: "./server.js", 
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}