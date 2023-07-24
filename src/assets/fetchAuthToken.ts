interface Props {
  url: string;
  credentials: {
    name?: string;
    email: string;
    password: string;
  };
}

const BaseUrl = "http://localhost:8000/";

export const fetchAuthToken = async ({ url, credentials }: Props) => {
  // Lógica para fazer a requisição ao backend e obter o token
  const response = await fetch(`${BaseUrl}${url}`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.token;
};
