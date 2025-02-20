export const users = [
    {id:1, name:'dong'},
    {id:2, name:'ding'}
]

export async function GET() {
    return Response.json(users);
}

export async function POST() {

}