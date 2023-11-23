import H5web from "./components/h5web";

async function getData() {
  const res = await fetch("https://api.ramanchada.ideaconsult.net/dataset/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const arrayOfUrls = Object.keys(data.datasets);
  // console.log(Object.keys(data.datasets));

  return (
    <main className="">
      <H5web urls={arrayOfUrls} />
    </main>
  );
}
