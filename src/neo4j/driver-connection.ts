import neo4j from 'neo4j-driver'
const URI = process.env.NEO4J_URI || 'neo4j://localhost'
const USER = process.env.NEO4J_USER || 'neo4j'
const PASSWORD = process.env.NEO4J_PASSWORD || '12345678'

let driver;

const createDriver = () => {
  if (!driver) {
    console.log('Creating driver')
    console.log("Connection info: "+URI, USER, PASSWORD)
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
    console.log('Driver created')
  }
  return driver
}

const getDriver = () => {
  if (!driver) {
    throw new Error('Driver not created. Call createDriver() first.')
  }
  return driver
}

export { createDriver, getDriver }