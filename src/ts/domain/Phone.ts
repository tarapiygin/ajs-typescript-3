import Buyable from './Buyable';

/**                                                                                                                                                                                                                                                                                  
 * @module user                                                                                                                                                                                                                                                                      
 */                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                     
/**                                                                                                                                                                                                                                                                                  
 * Load user info by id                                                                                                                                                                                                                                                              
 *                                                                                                                                                                                                                                                                                   
 * @param {number} id user id                                                                                                                                                                                                                                                        
 * @returns {Object} user info                                                                                                                                                                                                                                                       
 */
export default class Phone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
    ) { }
}