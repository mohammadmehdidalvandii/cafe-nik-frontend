import { useGetAllBranches } from '@services/branch.services';
import { cn } from '@utils/cn';
import { Clock, MapPin, Phone } from 'lucide-react';
import React, { useMemo, useState } from 'react';

const BranchItems: React.FC = () => {
  const { data: Branches, isLoading } = useGetAllBranches();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // گرفتن شهرهای یکتا
  const cities = useMemo(() => {
    if (!Branches) return [];
    return Array.from(
      new Set(Branches.map((branch: any) => branch.city.name))
    );
  }, [Branches]);

  // فیلتر شعبه‌ها
  const filteredBranches = useMemo(() => {
    if (!Branches) return [];
    if (!selectedCity) return Branches;

    return Branches.filter(
      (branch: any) => branch.city.name === selectedCity
    );
  }, [Branches, selectedCity]);

  if (isLoading) {
    return <p className="text-center py-10">در حال دریافت اطلاعات...</p>;
  }

  return (
    <section className="py-10">
      <div className="container px-8 md:px-16">

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">

          {/* All Cities */}
          <button
            onClick={() => setSelectedCity(null)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
              !selectedCity
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            )}
          >
            همه شهرها
          </button>

          {/* Dynamic Cities */}
          {cities.map((cityName:any) => (
            <button
              key={cityName}
              onClick={() => setSelectedCity(cityName)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                selectedCity === cityName
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              {cityName}
            </button>
          ))}
        </div>

        {/* Branches Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBranches.length === 0 && (
            <p className="col-span-full text-center">
              شعبه‌ای در این شهر وجود ندارد
            </p>
          )}

          {filteredBranches.map((branch: any) => (
            <div
              key={branch.id}
              className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-sansBold font-black">
                  شعبه {branch.name}
                </h3>
                <span className="rounded-full bg-secondary px-3 py-1 text-[0.9rem] text-secondary-foreground">
                  {branch.city.name}
                </span>
              </div>

              <div className="space-y-3 text-lg">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{branch.address}</span>
                </div>

                <div className="flex items-start gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span dir="ltr">{branch.phone}</span>
                </div>

                <div className="flex items-start gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>8 صبح تا 11 شب</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BranchItems;
