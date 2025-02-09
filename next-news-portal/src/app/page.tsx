import Banner from "@/components/shared/Banner";
import NewsCard from './../components/shared/NewsCard';
import { News } from "@/types/task"; // Capitalized interface name

const Home = async () => {
  const data = await fetch('https://to-do-application-liart-one.vercel.app/api/v1/all-task', {
    cache: 'force-cache'
  });

  const newsData = await data.json();

  const newsItem = newsData.data;



  return (
    <div>
      <Banner />
      <div className="grid lg:grid-cols-4 gap-6 " >
        {
          newsItem.map((item: News, i) => {
            return (
              <div key={i} >
                <NewsCard item={item} ></NewsCard>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;
