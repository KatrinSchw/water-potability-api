import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split, cross_val_score, RandomizedSearchCV, GridSearchCV
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.preprocessing import StandardScaler
from imblearn.over_sampling import SMOTE
from pandas_profiling import ProfileReport

from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier


def main():
    df_raw = pd.read_csv("./data/water_potability.csv")
    profile = ProfileReport(df_raw, title="Pandas Profiling Report", explorative=True)
    profile.to_file("profiles/profile.html")


if __name__ == "__main__":
    main()
