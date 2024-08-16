export async function realmHandler(message: Message, env: Env): Promise<any | null> {
    const data: any = message.body;
    const id = data?.id;

    if (id) {
        console.log(id);
    }

    return null;
}
