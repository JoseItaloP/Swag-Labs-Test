import login from "../pages/login"

describe("Test the checkout pages", ()=>{

    const user = {
                StandardU: 'standard_user',
                LockedU: 'locked_out_user',
                ProblemU: 'problem_user',
                PerformanceGU: 'performance_glitch_user',
                ErroU: 'error_user',
                VisualU: 'visual_user'
            }
    
            const pass = 'secret_sauce'
    
            beforeEach(()=>{
                login.visitPage()
            })

    it('should fishing the buy with the item', ()=>{

    })

    it('should not buy the item with the erro_user', ()=>{

    })

    it('should not fish the buy without lastName with problem_user', ()=>{

    })

    it('should make appear erro after not digitate the correctly data in checkout-page', ()=>{

    })
})  