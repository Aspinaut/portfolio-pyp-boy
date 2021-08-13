from rest_framework import serializers 

class SalonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salon
        fields = ['id', 'users': [], 'game']
        # rajouter les extra_kwargs

    def create(self, validated_data):
        salon = Salon.objects.create_salon(**validated_data)
        return salon