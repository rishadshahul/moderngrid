from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from studentapp.models import studentDB
from studentapp.serializers import studentSerializer


# Create your views here.
@csrf_exempt

def studentAPI(req,id=0):
    if req.method=="GET":
        student_data=studentDB.objects.all()
        student_serializer=studentSerializer(student_data, many=True)
        return JsonResponse(student_serializer.data,safe=False)

    elif req.method=="POST":
        student_data=JSONParser().parse(req)
        obj=studentSerializer(data=student_data)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data saved Succesfully",safe=False)
        return JsonResponse("invalid Data....!",safe=False)

    elif req.method=="PUT":
        edit_data=JSONParser().parse(req)
        student=studentDB.objects.get(studentID=edit_data["studentID"])
        obj=studentSerializer(student,data=edit_data)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data Update Succesfull ...", safe=False)
        return JsonResponse("Invalid data...!!" ,safe=False)

    elif req.method=='DELETE':
        data=studentDB.objects.get(studentID=id)
        data.delete()
        return JsonResponse("Data delete...", safe=False)




