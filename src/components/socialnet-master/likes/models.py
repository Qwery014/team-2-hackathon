from django.db import models

from django.contrib.auth import get_user_model

from anime.models import Anime
from fanfic.models import Fanfic
from manga.models import Manga

User = get_user_model()

class FanficLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    fanfic = models.ForeignKey(Fanfic, on_delete=models.CASCADE, related_name='likes')

    def __str__(self):
        return f'{self.owner} -> {self.fanfic}'


class AnimeLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE, related_name='likes')

    def __str__(self):
        return f'{self.owner} -> {self.fanfic}'


class MangaLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE, related_name='likes')
