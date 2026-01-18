import login from "../pages/login"

describe('Inventory test page', ()=>{
        
        const user = {
            StandardU: 'standard_user',
            ProblemU: 'problem_user',
            PerformanceGU: 'performance_glitch_user',
            ErroU: 'error_user',
            VisualU: 'visual_user'
        }

        const pass = 'secret_sauce'

    beforeEach(()=>{
        login.visitPage()
    })

    //check add to cart
    it('should add the item to the cart succefully', ()=>{

    })

    it("should remove the item from the cart succefully", ()=>{

    })

    it("should not remove item from the cart in problem_user",()=>{

    })

    it("should not remove item from the cart in error_user")

    //check click on item
    it("should show the same item after click on it", ()=>{

    })

    it("should not show the same item after click on it with problem_user", ()=>{
        
    })
})