// App Imports
import models from '../../setup/models'

// Get all products
export async function getAll() {
  return await models.Style.findAll({ order: [['id', 'DESC']] })
}
