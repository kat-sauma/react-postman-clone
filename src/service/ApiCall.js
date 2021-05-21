export const httpCall = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json();

        return data;
    } catch(err) {
        return err;
    }
}

export const postToApi = async (url, body) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: body
        })
        const data = await res.json();

        return data;
    } catch(err) {
        return err;
    }
}

export const putApi = async (url, body) => {
    try {
        const res = await fetch(url, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: body
        })
        const data = await res.json();

        return data;
    } catch(err) {
        return err;
    }
}

export const deleteFromApi = async (url) => {
    try {
        const res = await fetch(url, {
            method: 'DELETE'
        })
        const data = await res.json();

        return data;
    } catch(err) {
        return err.message;
    }
}