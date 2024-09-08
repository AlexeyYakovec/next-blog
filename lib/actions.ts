'use server';

export async function createSubscribe(formData: FormData) {
    console.log('raw data', formData.get('email'));
}
