from rest_framework import serializers
from studentapp.models import studentDB

class studentSerializer(serializers.ModelSerializer):
    class Meta:
        model=studentDB
        fields=(
            'studentID',
            'studentName',
            'age',
            'place',
        )