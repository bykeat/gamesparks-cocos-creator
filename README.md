# gamesparks-cocos-creator
TLDR:
- Modified GameSpark Javascript SDK (ver 2018).
- Working.
- No more Match & Realtime service.
- Abandoned.

# Story:
I was looking for a good network service for my multiplayer game research.

I stumbled upon GameSparks due to 100 CCU.

Yes, there is no libraries supporting for Cocos Creator but GameSpark Javascript SDK seems to have potential.

I have create a wrapper to make it work for Cocos Creator 2.4.0 at this point of writing.

Unfortunately, it doesn't support for real-time. But yes it should work for turn-based games or anything else.

# Steps:
- Copy the files into the asset folder on fresh project.
- Configure the API KEY and Secrets in WrapGameSpark.js in line 36, 37 and 46.
- Good luck.
