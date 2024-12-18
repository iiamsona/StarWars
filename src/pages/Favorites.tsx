import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toggleLiked } from '@/store/slices/characterSlice.js';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import BabyYoda from '@/assets/images/Baby-Yoda-Crying.jpg';
import type { RootState } from '@/store';

const Favorites = () => {
  const dispatch = useDispatch();
  const likedCards = useSelector((state: RootState) => state.character.likedCards);
  const [people, setPeople] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setPeople(response.data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  const likedPeople = useMemo(() => {
    return people.filter((_, index) => likedCards.includes(index));
  }, [people, likedCards]);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="flex h-screen flex-col bg-primaryBig bg-cover bg-center">
      <h1 className="mb-4 mt-8 text-center text-3xl font-bold text-white">
        Favorite Star Wars Characters
      </h1>
      <div className="flex-1 overflow-y-auto p-4">
        {likedPeople.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-10">
            <p className="text-center text-white">No favorite characters</p>
            <img className="w-35 mt-1 h-20" src={BabyYoda} alt="Baby Yoda" />
          </div>
        ) : (
          likedPeople.map((person) => {
            const originalIndex = people.findIndex((p) => p.name === person.name);

            return (
              <div className="px-10">
                <Card
                  key={person.name}
                  className="mb-4 transform transition-transform hover:scale-105"
                >
                  <CardContent>
                    <CardDescription>
                      <CardHeader>
                        <CardTitle>
                          <p className="text-2xl font-semibold text-white">{person.name}</p>
                        </CardTitle>
                      </CardHeader>
                      <CardFooter className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-white">Gender: {person.gender}</p>
                        <button
                          onClick={() => dispatch(toggleLiked(originalIndex))}
                          className="rounded-full p-2 transition-colors"
                          aria-label={`Toggle like for ${person.name}`}
                        >
                          <div className="relative h-[90px] w-[90px]">
                            <div
                              className={`absolute left-[50px] top-0 h-[80px] w-[50px]
                              ${likedCards.includes(originalIndex) ? 'before:bg-red-500' : 'before:bg-white'} 
                              before:rounded-b-0 before:rounded-l-0 before:absolute before:left-0 before:top-0 
                              before:h-full before:w-full before:origin-[0_100%] before:-rotate-45 
                              before:rounded-r-[50px] before:rounded-t-[50px] 
                              before:content-['']`}
                            />
                            <div
                              className={`absolute left-0 top-0 h-[80px] w-[50px] 
                              ${likedCards.includes(originalIndex) ? 'after:bg-red-500' : 'after:bg-white'} 
                              after:rounded-b-0 after:rounded-l-0 after:absolute after:left-0 
                              after:top-0 after:h-full after:w-full after:origin-[100%_100%] after:rotate-45 
                              after:rounded-r-[50px] after:rounded-t-[50px] 
                              after:content-['']`}
                            />
                          </div>
                        </button>
                      </CardFooter>
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favorites;
