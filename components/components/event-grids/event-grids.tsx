import React, { useState } from 'react';
import EventCard from '../card/event';
import Button from '@/components/ui/NewButton';

function EventGrids({ events, title }: { title?: string; events: any[] }) {
  const [limit, setLimit] = useState<number>(5);
  return (
    <div className="max-w-[1240px] mx-auto mb-10 lg:mb-24">
      <span className="text-Grey-G80">Discover</span>
      <h2 className="text-3xl font-bold mb-6 mt-2 text-Grey-G700">{title}</h2>
      {events.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-x-7 lg:gap-y-8 mb-8 sm:mb-12">
          {events.map((item, index) => {
            if (index > limit) return;
            return (
              <EventCard
                key={item.id}
                imagePath={item.banner}
                date={item.date}
                title={item.title}
                location={item.location}
                price={item.price}
                tag={item?.tag}
                tag_image={item?.tag_image}
              />
            );
          })}
        </div>
      ) : (
        <div className="py-16">
          <p className="text-center text-3xl font-bold">No event found for this tag</p>
        </div>
      )}
      {limit < events.length && (
        <Button
          intent={'secondary'}
          size={'lg'}
          className={`text-sm shrink-0 border-primary-100 border grid place-content-center font-bold text-primary-100 rounded-lg mx-auto`}
          onClick={() => setLimit((prevState) => prevState + 6)}
        >
          View More
        </Button>
      )}
    </div>
  );
}

export default EventGrids;
