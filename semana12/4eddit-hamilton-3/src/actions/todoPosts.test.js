import { setAllPosts, postDetails } from './todoPosts'

describe("Todos os Actions", ()=> {
    test("setAllPosts", ()=> {

        //preparação
    const mockPost = "Teste 1";

    //execução

    const action = setAllPosts(mockPost)

    //verificação
    expect(action.type).toBe("SET_ALL_POSTS")
    expect(action.payload.posts).toBe(mockPost)



    })

    test("postDetails", () => {
        // Preparação
        const mockComment = "Oi, eu sou a bananinha!";
    
        // Execução
        const action = postDetails(mockComment);
    
        // Verificação
        expect(action.type).toBe("POST_DETAILS");
        expect(action.payload.comments).toBe(mockComment);
      });
    });


