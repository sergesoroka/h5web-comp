import PageWrapper from "./components/PageWrapper";

async function getData() {
  const res = await fetch("https://api.ramanchada.ideaconsult.net/dataset/", {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const arrayOfUrls = Object.keys(data.datasets);

  const fileList = arrayOfUrls.map((item) => {
    return item.replace("http://api.ramanchada.ideaconsult.net/dataset/", "");
  });

  return (
    <main className="">
      <PageWrapper fileList={fileList} />
    </main>
  );
}
