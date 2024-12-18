import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLiked, setFilter } from '@/store/slices/characterSlice.js';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { FilterAndSearch } from '@/components/ui/filter';
import type { RootState } from '@/store';

const CharacterList = () => {
  const dispatch = useDispatch();
  const likedCards = useSelector((state: RootState) => state.character.likedCards);
  const filter = useSelector((state: RootState) => state.character.filter);

  const [people, setPeople] = useState<Array<any>>([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  const getPeople = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      setPeople(response.data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  const filteredPeople = useMemo(() => {
    let filteredList = people.filter((person) =>
      person.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    if (filter === 'Liked') {
      filteredList = filteredList.filter((_, index) => likedCards.includes(index));
    }

    return filteredList;
  }, [people, searchValue, filter, likedCards]);

  if (loading) {
    return <div className="flex h-full items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="flex h-screen flex-col bg-primaryBig bg-cover bg-center">
      <div className="ml-8 mt-8 w-48">
        <FilterAndSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setFilter={(newFilter) => dispatch(setFilter(newFilter))}
        />
      </div>
      <div className="flex-1 overflow-y-auto px-10 pt-2">
        {filteredPeople.map((person, index) => (
          <Card key={person.name} className="mb-4 transform transition-transform hover:scale-105">
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
                    onClick={() => dispatch(toggleLiked(index))}
                    className="rounded-full p-2 transition-colors"
                    aria-label={`Toggle like for ${person.name}`}
                  >
                    <div className="relative h-[90px] w-[90px]">
                      <div
                        className={`absolute left-[50px] top-0 h-[80px] w-[50px]
                          ${likedCards.includes(index) || filter === 'Liked' ? 'before:bg-red-500' : 'before:bg-white'} 
                          before:rounded-b-0 before:rounded-l-0 before:absolute before:left-0 before:top-0 
                          before:h-full before:w-full before:origin-[0_100%] before:-rotate-45 
                          before:rounded-r-[50px] before:rounded-t-[50px] 
                          before:content-['']`}
                      />
                      <div
                        className={`absolute left-0 top-0 h-[80px] w-[50px] 
                          ${likedCards.includes(index) || filter === 'Liked' ? 'after:bg-red-500' : 'after:bg-white'} 
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
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
