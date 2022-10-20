import * as IngredientsActionCreators from './ingredients'
import * as OrderActionCreators from './order'

export default {
    ...IngredientsActionCreators,
    ...OrderActionCreators
}
