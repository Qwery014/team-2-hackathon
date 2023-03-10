from django.db import models
from django.utils.text import slugify

class MangaGenres(models.Model):
    slug = models.SlugField(max_length=50, primary_key=True)
    name = models.CharField(max_length=30, unique=True)
    title = models.CharField(max_length=15, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Manga(models.Model):
    title = models.CharField(max_length=30)
    genre = models.ForeignKey(MangaGenres, on_delete=models.SET_NULL, null=True)
    image = models.FileField(upload_to='media/', blank=True, null=True)
    desc = models.CharField(max_length=300, blank=True, default='Description')

    def __str__(self):
        return self.title


class MangaVolume(models.Model):
    slug = models.SlugField(max_length=50, primary_key=True)
    title = models.CharField(max_length=30, unique=True)
    own_manga = models.ForeignKey(Manga, on_delete=models.CASCADE, related_name='volumes')


    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Chapter(models.Model):
    title = models.CharField(max_length=30)
    volume = models.ForeignKey(MangaVolume, on_delete=models.CASCADE, related_name='chapters')

    def __str__(self):
        return self.title


from decouple import config
class MangaImages(models.Model):
    title = models.CharField(max_length=150, blank=True)
    image = models.ImageField(upload_to='media/')
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE,
                             related_name='images')

    url = models.CharField(max_length=300, blank=True)

    def save(self, *args, **kwargs):
        self.url = str(config('Url')) + str(self.image)
        self.title = self.title
        return super(MangaImages, self).save(*args, **kwargs)


