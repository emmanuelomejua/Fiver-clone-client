import SERVER from "./server";

const upload = async (file: string) => {
    const data = new FormData();
    data.append('file', file)
    data.append('upload_preset', 'fiverr')

    try {
      const res = await SERVER.post('https://api.cloundinary.com/v1_1/lamadev/image/upload', data);

      const { url } = res.data;
      return url
    } catch (error) {
      throw new Error()
    }
  }


export default upload;
