import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLiked } from '@/store/slices/characterSlice';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const CharacterInfo = () => {
  const dispatch = useDispatch();
  const likedCards = useSelector((state) => state.character.likedCards);
  const filter = useSelector((state) => state.character.filter);

  const [people, setPeople] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getPeople = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      const peopleData = response.data.results;

      // Fetch homeworld, films, and vehicles for each person
      const peopleWithDetails = await Promise.all(
        peopleData.map(async (person) => {
          const homeworldName = person.homeworld
            ? (await axios.get(person.homeworld)).data.name
            : 'Unknown';

          const films = await Promise.all(
            person.films.map(async (filmUrl) => {
              const filmResponse = await axios.get(filmUrl);
              return filmResponse.data.title;
            })
          );

          const vehicles = await Promise.all(
            person.vehicles.map(async (vehicleUrl) => {
              const vehicleResponse = await axios.get(vehicleUrl);
              return vehicleResponse.data.name;
            })
          );

          return { ...person, homeworldName, films, vehicles };
        })
      );

      setPeople(peopleWithDetails);
    } catch (error) {
      console.error('Error fetching data: ', error);
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

  return (
    <div className="bg-primaryBig flex h-[100vh] flex-col bg-cover bg-center">
      <div className="mt-8 flex-1 overflow-y-auto p-4">
        {filteredPeople.map((person, index) => (
          <Card key={index} className="mb-4">
            <CardContent>
              <CardDescription>
                <CardHeader>
                  <CardTitle>
                    <p className="fontWeight-t2-semibold text-[25px] text-white">{person.name}</p>
                  </CardTitle>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div>
                    <p className="fontWeight-t2-semibold font-t4 text-[18px] text-white">
                      Gender: {person.gender}
                    </p>
                    <p className="fontWeight-t2-semibold font-t4 text-[18px] text-white">
                      Mass: {person.mass}
                    </p>
                    <p className="fontWeight-t2-semibold font-t4 text-[18px] text-white">
                      Height: {person.height}
                    </p>
                  </div>
                  <div>
                    <p className="fontWeight-t2-semibold font-t4 text-[18px] text-white">
                      Hair color: {person.hair_color}
                    </p>
                    <p className="fontWeight-t2-semibold font-t4 text-[18px] text-white">
                      Eye color: {person.eye_color}
                    </p>
                    <p className="fontWeight-t2-semibold font-t4 text-[18px] text-white">
                      Homeworld: {person.homeworldName}
                    </p>
                  </div>
                  <p className="fontWeight-t2-semibold font-t4 text-[18px] text-white">Films:</p>
                  <div className="flex flex-col gap-2 text-white">
                    {person.films.length > 0 ? (
                      person.films.map((film, filmIndex) => (
                        <span key={filmIndex} className="text-white">
                          {film}
                        </span>
                      ))
                    ) : (
                      <span>None</span>
                    )}
                  </div>

                  <p className="fontWeight-t2-semibold font-t4 mt-4 text-[18px] text-white">
                    Vehicles:
                  </p>
                  <div className="flex flex-col items-center justify-center gap-2 self-center text-white">
                    {person.vehicles.length > 0 ? (
                      person.vehicles.map((vehicle, vehicleIndex) => (
                        <span key={vehicleIndex} className="text-white">
                          {vehicle}
                        </span>
                      ))
                    ) : (
                      <span>None</span>
                    )}
                  </div>

                  <button
                    onClick={() => dispatch(toggleLiked(index))}
                    className="rounded-full p-2 transition-colors"
                  >
                    <div className={`relative h-[90px] w-[90px]`}>
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

export default CharacterInfo;
