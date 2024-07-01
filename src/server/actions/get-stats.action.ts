import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { createServerAction, ZSAError } from "zsa";

export const getStats = createServerAction()
  .input(
    z.object({
      uuidOrUsername: z.string(),
    }),
  )
  .handler(async ({ input }) => {
    const isUuid = input.uuidOrUsername.length === 36;

    const user = await prisma.users.findFirst({
      where: {
        [isUuid ? "uuid" : "username"]: input.uuidOrUsername,
      },
      select: {
        /* Return only public fields */
        player_uuid: true,
        username: true,
        nickname: true,
        DisplayName: true,
        LastLoginTime: true,
        LastLogoffTime: true,
        TotalPlayTime: true,
        Balance: true,
        BannedUntil: true,
        BannedAt: true,
        BannedBy: true,
        BanReason: true,
      },
    });

    if (!user) throw new ZSAError("NOT_FOUND", "User not found");

    return user;
  });
