"use client";

import {
  formatBigIntToDateString,
  formatNumber,
  formatPlaytime,
  getSkinUrl,
  imageExists,
  stripColorCodes,
} from "@/lib/utils";
import { Stats } from "@/types/stats.type";
import Image from "next/image";
import { useEffect, useState } from "react";

type StatsInfoProps = {
  stats?: Stats;
};

const defaultSkin = "Alex";

const StatsInfo = ({ stats }: StatsInfoProps) => {
  const [image, setImage] = useState<string>(
    `${getSkinUrl()}/full/512/${defaultSkin}`,
  );

  const checkImageFound = async () => {
    const found = await imageExists(
      `${getSkinUrl()}/full/512/${stats?.username}`,
    );

    if (!found) {
      setImage(`${getSkinUrl()}/full/512/${defaultSkin}`);
    }

    setImage(`https://visage.surgeplay.com/full/512/${stats?.username}`);
  };

  useEffect(() => {
    if (!stats) return;
    checkImageFound();
  }, [stats]);

  return (
    <div className='grid grid-cols-3 gap-4 justify-center w-full max-w-7xl mx-auto'>
      <Image
        src={image}
        width={256}
        height={256}
        alt='Player Avatar'
        className='col-span-1 rounded-lg'
      />

      <div className='col-span-2'>
        <div>
          <h1 className='text-3xl font-bold'>{stats?.username}</h1>
          {stats?.DisplayName && (
            <p className='text-lg'>{stripColorCodes(stats?.DisplayName)}</p>
          )}
        </div>
        <div className='flex items-center justify-between space-x-2 p-4 bg-gray-300 rounded-lg text-2xl font-bold tracking-wider uppercase my-2'>
          <p>Last Seen</p>
          <p className='text-lg'>
            {formatBigIntToDateString(stats?.LastLogoffTime)}
          </p>
        </div>
        <div className='flex items-center justify-between space-x-2 p-4 bg-gray-200 rounded-lg text-2xl font-bold tracking-wider uppercase my-2'>
          <p>Playtime</p>
          <p className='text-lg'>{formatPlaytime(stats?.TotalPlayTime)}</p>
        </div>
        <div className='flex items-center justify-between space-x-2 p-4 bg-gray-300 rounded-lg text-2xl font-bold tracking-wider uppercase my-2'>
          <p>Balance</p>
          <p className='text-lg'>{formatNumber(stats?.Balance)}</p>
        </div>
        {stats?.BannedUntil && (
          <>
            <div className='flex items-center justify-between space-x-2 p-4 bg-red-300 rounded-lg text-2xl font-bold tracking-wider uppercase my-2'>
              <p>Banned At</p>
              <p className='text-lg'>
                {stats.BannedUntil == "-1"
                  ? "Never"
                  : formatBigIntToDateString(stats?.BannedAt)}
              </p>
            </div>
            <div className='flex items-center justify-between space-x-2 p-4 bg-red-200 rounded-lg text-2xl font-bold tracking-wider uppercase my-2'>
              <p>Banned Until</p>
              <p className='text-lg'>
                {formatBigIntToDateString(stats?.BannedUntil)}
              </p>
            </div>
            <div className='flex items-center justify-between space-x-2 p-4 bg-red-300 rounded-lg text-2xl font-bold tracking-wider uppercase my-2'>
              <p>Ban Reason</p>
              <p className='text-lg'>{stripColorCodes(stats.BanReason)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StatsInfo;
